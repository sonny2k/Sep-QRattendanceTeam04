import React from "react";
import { Link } from "react-router-dom";
import TableCommon from "./common/table";

import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

const SemesterTable = ({ onDelete, semesters, onSort, sortColumn, onSelectedSemester }) => {
  const columns = [
    {
      path: "name",
      label: "Display Name",
      content: (semester) => <Link to={`/semesters/${semester._id}`}>{semester.name}</Link>,
    },
    { path: "year", label: "Year" },
    { path: "symbol", label: "Symbol" },
    {
      key: "edit",
      content: (semester) => (
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-537440761">Edit Semester..</Tooltip>}
        >
          <Button
            className="btn-simple btn-link p-1"
            type="button"
            variant="info"
            onClick={() => onSelectedSemester(semester)}
          >
            <i className="fas fa-edit"></i>
          </Button>
        </OverlayTrigger>
      ),
    },
    {
      key: "delete",
      content: (semester) => (
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-21130535">Remove Semester</Tooltip>}
        >
          <Button
            onClick={() => onDelete(semester)}
            className="btn-simple btn-link p-1"
            type="button"
            variant="danger"
          >
            <i className="fas fa-times"></i>
          </Button>
        </OverlayTrigger>
      ),
    },
  ];

  return (
    <TableCommon
      columns={columns}
      data={semesters}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default SemesterTable;
