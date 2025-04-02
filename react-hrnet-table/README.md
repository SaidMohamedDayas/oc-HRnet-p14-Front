# HRnet Table – React Component

💼 A modern React replacement for the legacy jQuery DataTables plugin used in the HRnet employee management system.

This component displays employee records in a searchable, sortable, and paginated table. It is built using [react-data-table-component](https://www.npmjs.com/package/react-data-table-component) and is designed to integrate easily with the new React version of HRnet.

---

## ✨ Features

- 🔍 **Global search** across all fields
- ⬇️ **Sortable columns**
- 📄 **Pagination**
- 🖱️ **Row highlight** on hover
- ♻️ **Lightweight and customizable**

---

## 📦 Installation

To install the package, run the following command:

```bash
npm install react-hrnet-table
```

---

## 🚀 Usage

Here’s an example of how to use the `HRnetTable` component:

```jsx
import HRnetTable from 'react-hrnet-table';

const employees = [
  {
    firstName: "Alice",
    lastName: "Smith",
    startDate: "2023-01-01",
    department: "Marketing",
    dateOfBirth: "1990-05-10",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
  // More employees...
];

function App() {
  return <HRnetTable data={employees} />;
}

export default App;
```

---

## 🧩 Props

| Prop  | Type   | Required | Description                                   |
|-------|--------|----------|-----------------------------------------------|
| data  | Array  | ✅       | Array of employee objects to display in the table |

Each employee object must contain the following fields:

- `firstName`
- `lastName`
- `startDate`
- `department`
- `dateOfBirth`
- `street`
- `city`
- `state`
- `zipCode`

---

## 📚 Technologies

This project uses the following technologies:

- **React**
- **react-data-table-component**

---

## 📁 Repository

Find the source code on GitHub: [HRnet Table Repository](https://github.com/SaidMohamedDayas/oc-HRnet-p14-Front/tree/react-conversion/react-hrnet-table)

---

## 🐛 Bug Reports / Feature Requests

If you encounter any issues or have feature requests, please open an issue here: [GitHub Issues](https://github.com/saidDayas/react-hrnet-table/issues)

---

## 📜 License

This project is licensed under the MIT License. © @SaidMohamedDayas
