import React from "react";
import Table from "../table/Table";
import useFetch from "../../hooks/useFetch";
import Btn_create_item from "../btn_create_item/Btn_create_item";

function Top_dishe() {
  const { data } = useFetch(`/top-dishes`);
  return (
    <div
      style={{ background: "#EEF7FF" }}
      className=" md:w-full text-slate-800"
    >
      <h1 className="font-bold text-2xl py-5 px-4" style={{ color: "#016288" }}>
        Top Dishe
      </h1>
      <div className="overflow-x-auto">
        <Table data={data} />
      </div>
      <Btn_create_item />
    </div>
  );
}

export default Top_dishe;
