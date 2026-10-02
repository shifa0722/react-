import React, { useMemo, useState } from "react";

const Products2 = () => {
  const employees = [
    {
      name: "Shifa",
      age: 25,
      role: "Developer",
    },
    {
      name: "sita",
      age: 30,
      role: "Designer",
    },
    {
      name: "nita",
      age: 28,
      role: "Manager",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>

      <input
        type="text"
        placeholder="Search employee by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredEmployees.map((employee) => (
        <div key={employee.name}>
          <h3>{employee.name}</h3>
          <p>Age: {employee.age}</p>
          <p>Role: {employee.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Products2;