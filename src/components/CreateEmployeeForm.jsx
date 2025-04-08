import "../styles/CreateEmployeeForm.css";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { EmployeeContext } from "../context/EmployeeContext";
import { states } from "../data/states.js";

const CreateEmployeeForm = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const { register, handleSubmit, reset } = useForm();
  const [confirmation, setConfirmation] = useState(false);

  const onSubmit = (data) => {
    setEmployees([...employees, data]);
    localStorage.setItem("employees", JSON.stringify([...employees, data]));
    setConfirmation(true);
    reset();
    console.log(data);
  };

  return (
    <>
      <h2 className="title">Create Employee</h2>
      <form id="create-employee" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register("firstName")} />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" {...register("lastName")} />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input id="dateOfBirth" type="date" {...register("dateOfBirth")} />

        <label htmlFor="startDate">Start Date</label>
        <input id="startDate" type="date" {...register("startDate")} />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" {...register("street")} />

          <label htmlFor="city">City</label>
          <input id="city" {...register("city")} />

          <label htmlFor="state">State</label>
          <select id="state" {...register("state")}>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" {...register("zipCode")} />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" {...register("department")}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>

        <button type="submit">Save</button>
      </form>

      {confirmation && (
        <div id="confirmation" className="modal">
          <div className="modal-content">
            <button onClick={() => setConfirmation(false)}>&times;</button>
            <p>Employee Created</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateEmployeeForm;
