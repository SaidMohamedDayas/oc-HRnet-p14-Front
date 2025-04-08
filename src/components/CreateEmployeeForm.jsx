import "../styles/CreateEmployeeForm.css";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { EmployeeContext } from "../context/EmployeeContext";
import { states } from "../data/states.js";

const CreateEmployeeForm = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
        <input
          id="firstName"
          {...register("firstName", { required: "First Name is required" })}
        />
        {errors.firstName && <p className="error">{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          {...register("lastName", { required: "Last Name is required" })}
        />
        {errors.lastName && <p className="error">{errors.lastName.message}</p>}

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          id="dateOfBirth"
          type="date"
          {...register("dateOfBirth", { required: "Date of Birth is required" })}
        />
        {errors.dateOfBirth && <p className="error">{errors.dateOfBirth.message}</p>}

        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          {...register("startDate", { required: "Start Date is required" })}
        />
        {errors.startDate && <p className="error">{errors.startDate.message}</p>}

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            {...register("street", { required: "Street is required" })}
          />
          {errors.street && <p className="error">{errors.street.message}</p>}

          <label htmlFor="city">City</label>
          <input
            id="city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && <p className="error">{errors.city.message}</p>}

          <label htmlFor="state">State</label>
          <select
            id="state"
            {...register("state", { required: "State is required" })}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && <p className="error">{errors.state.message}</p>}

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            {...register("zipCode", { required: "Zip Code is required" })}
          />
          {errors.zipCode && <p className="error">{errors.zipCode.message}</p>}
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          id="department"
          {...register("department", { required: "Department is required" })}
        >
          <option value="">Select Department</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>
        {errors.department && <p className="error">{errors.department.message}</p>}

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
