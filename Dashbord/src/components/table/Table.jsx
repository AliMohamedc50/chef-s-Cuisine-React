import React from 'react'
import { useNavigate } from "react-router-dom";

function Table({data}) {

  const navigate = useNavigate();

    const handleRowClick = (id) => {
      navigate(`item/${id}`);
    };

    return (
      <div>
        <table className="w-full">
          <thead className="bg-cyan-700 text-white bg-Primary" >
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                className="hover:bg-Secondary-tow cursor-pointer ease-out hover:text-white"
                key={row.id}
                onClick={() => handleRowClick(row.id)}
              >
                <td>{row.id}</td>
                <td>{row.attributes.title}</td>
                <td>{row.attributes.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Table
