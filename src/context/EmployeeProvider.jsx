import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { EmployeeContext } from "./EmployeeContext";

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(employees);
  }, []);

  const clearEmployees = () => {
    setEmployees([]);
    localStorage.removeItem("employees");
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, setEmployees, clearEmployees }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

EmployeeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
