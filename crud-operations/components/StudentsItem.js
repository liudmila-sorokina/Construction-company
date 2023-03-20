import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";



const StudentsItem = (props) => {
  const temp = () => alert('KEKEKKE')
  const config = {
    method: 'delete',
    url: `https://users-e87a.restdb.io/rest/students/${props.id}`,
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': '63e26aaf478852088da67e61'
    }
  };

  const deleteStudent = () => {
   
      axios(config)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    
  };
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
        <img src="crud-operations/svg/pencil-crud.svg" alt="bucket" onClick={deleteStudent} />
      </td>
    </tr>

  );
};

export default StudentsItem;
