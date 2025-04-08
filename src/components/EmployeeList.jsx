import "../styles/EmployeeList.css";
import { useContext, useState } from "react";
import DataTable from "react-data-table-component";
import { EmployeeContext } from "../context/EmployeeContext";
import { Link } from "react-router-dom";

// Fonction utilitaire pour formater les dates
const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("fr-FR").format(new Date(dateString));
};

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    {
      name: "Start Date",
      selector: (row) => formatDate(row.startDate), // Formater la date
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => formatDate(row.dateOfBirth), // Formater la date
      sortable: true,
    },
    { name: "Department", selector: (row) => row.department, sortable: true },
    { name: "Street", selector: (row) => row.street, sortable: true },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
  ];

  return (
    <div id="employee-div" className="container">
      <h1 className="title">Current Employees</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        highlightOnHover
        pointerOnHover
        striped
      />
      <Link to="/" className="link-home">
        HOME
      </Link>
    </div>
  );
};

export default EmployeeList;
