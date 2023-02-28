import React from "react";

const StudentsItem = (props) => {
  return (
    
    <tr className="students-list__table-row">
      <td className="students-list__table-data"><img src={props.photopath} className="students-list__photo" /></td>
      <td className="students-list__table-data">{props.name}</td>
      <td className="students-list__table-data">{props.email}</td>
      <td className="students-list__table-data">{props.phone}</td>
      <td className="students-list__table-data">{props.number}</td>
      <td className="students-list__table-data">{props.date}</td>
      <td className="students-list__table-data">
        <img src="crud-operations/svg/pencil-crud.svg" alt="pencil" />
        <img src="crud-operations/svg/bucket-crud.svg" alt="bucket" />
      </td>
    </tr>
    
  );
};

export default StudentsItem;
