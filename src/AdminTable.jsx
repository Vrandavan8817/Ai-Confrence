import React, { useEffect, useState } from "react";

function AdminTable() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/register") // backend से data लाओ
      .then((res) => res.json())
      .then((data) => setRegistrations(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📋 All Registrations</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Nationality</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((reg) => (
            <tr key={reg._id}>
              <td>{reg.fullName}</td>
              <td>{reg.gender}</td>
              <td>{reg.dateOfBirth}</td>
              <td>{reg.nationality}</td>
              <td>{reg.email}</td>
              <td>{reg.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
