import React from "react";

const CoursesItem = (props) => {
  return (
    <tr className="courses-list__table-row">
      <td className="courses-list__table-data">{props.title}</td>
      <td className="courses-list__table-data">{props.description}</td>
      <td className="courses-list__table-data">{props.hours}</td>
    </tr>
  );
};

export default CoursesItem;
