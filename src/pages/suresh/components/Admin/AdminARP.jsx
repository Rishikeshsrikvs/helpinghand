import React, { useState } from "react";
import "./AdminARP.css";

const AdminARP = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", phone: "123-456-7890", year: 2020 },
    { id: 2, name: "Jane Smith", phone: "987-654-3210", year: 2021 },
  ]);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  return (
    <div className="adminarp">
      <div className="arp-container">
        <h1>ANNUAL REPORT PDF</h1>

        <form class="arp-form-container">
          <div className="arp-form-year">
            <label for="year">YEAR:</label>
            <input type="text" id="year" name="year" />
          </div>

          <div className="arp-btns">
            <button className="arp-upload-btn">UPLOAD PDF</button>
            <div className="arp-or">
              <span></span>
              <p>or</p>
              <span></span>
            </div>
            <button className="arp-drive-btn">DRIVE</button>
            <button className="arp-sub-btn">Submit</button>
          </div>
        </form>

        <div className="arp-table">
          <table>
            <thead>
              <tr className="">
                <th className="arp-thead-lr arp-tr">Name</th>
                <th className="arp-tr">Phone</th>
                <th className="arp-thead-rr arp-tr">Year</th>
              </tr>
            </thead>
            <tbody className="arp-tbody-r">
              {data.map((row) => (
                <tr key={row.id}>
                  <td className="arp-td">{row.name}</td>
                  <td className="arp-td">{row.phone}</td>
                  <td className="arp-td">{row.year}</td>
                  <td className="arp-td-btn">
                    <button
                      onClick={() => handleDelete(row.id)}
                      className="arp-td-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminARP;
