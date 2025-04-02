import { Link } from "react-router-dom";
import CreateEmployeeForm from "../components/CreateEmployeeForm";

const HomePage = () => {
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <CreateEmployeeForm />
      </div>
    </>
  );
};

export default HomePage;
