import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = (props) => {
  const { columns, sortColumn, onSort, data } = props;

  return (
    <table className="table m-3">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
