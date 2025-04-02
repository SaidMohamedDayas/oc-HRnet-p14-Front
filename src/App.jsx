import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EmployeeList from "./components/EmployeeList";
import { EmployeeProvider } from "./context/EmployeeProvider.jsx";

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
