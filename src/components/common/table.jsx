import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ columns, data, onSort, sortColumn, onDelete, onLike }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} onDelete={onDelete} onLike={onLike} />
    </table>
  );
};

export default Table;
