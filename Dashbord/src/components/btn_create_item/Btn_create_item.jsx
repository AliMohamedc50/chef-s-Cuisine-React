import React from 'react'
import { Link } from 'react-router-dom';

const Btn_create_item = () => {
  return (
    <Link to={"new-item"}>
      <button
        className="text-white bg-Secondary hover:bg-Secondary-tow font-semibold bg-green w-72 mt-5 ml-5 p-2 rounded-md"
      >
        Add New
      </button>
    </Link>
  );
}

export default Btn_create_item
