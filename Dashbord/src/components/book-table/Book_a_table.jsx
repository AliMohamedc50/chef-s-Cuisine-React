import React from 'react'
import useFetch from "../../hooks/useFetch"


function Book_a_table() {

  const { data } = useFetch(`/book-tables`);

  return (
    <div
      style={{ background: "#EEF7FF" }}
      className=" md:w-full  text-slate-800"
    >
      <h1 className="font-bold text-2xl py-5 px-4" style={{ color: "#016288" }}>
        Table reservation requests
      </h1>
      <div className="overflow-x-auto ">
        <table style={{ width: "180%" }} border={"1px"}>
          <thead className='bg-Primary' style={{ color: "#EEF7FF" }}>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Table Type</th>
              <th>Guest Number</th>
              <th>Placement</th>
              <th>Date</th>
              <th>time</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.attributes.firstName}</td>
                <td>{row.attributes.lastName}</td>
                <td>{row.attributes.email}</td>
                <td>{row.attributes.tableType}</td>
                <td>{row.attributes.guestNumber}</td>
                <td>{row.attributes.placement}</td>
                <td>{row.attributes.date}</td>
                <td>{row.attributes.time}</td>
                <td>{row.attributes.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Book_a_table
