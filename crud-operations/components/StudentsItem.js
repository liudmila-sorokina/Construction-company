import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { DELETE_STUDENT } from "../actions/constants"

const StudentsItem = (props) => {

  const dispatch = useDispatch()
  const student = useSelector((store) => store.student)

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
    .then((response) => {
      const deleteStudentAction = {type: DELETE_STUDENT, payload: props.id}
       dispatch(deleteStudentAction)
    })
    .catch((error) => console.log(error))

    toast("deleted a student");

  };

  return (
    <tr className="students-list__table-row">
      <td className="students-list__table-data"><img src={props.photopath} className="students-list__photo" /></td>
      <td className="students-list__table-data"><Link to={`/students/${props.id}`}>{props.name}</Link></td>
      <td className="students-list__table-data">{props.email}</td>
      <td className="students-list__table-data">{props.phone}</td>
      <td className="students-list__table-data">{props.number}</td>
      <td className="students-list__table-data">{props.date}</td>
      <td className="students-list__table-data">
        <Link to={`/students/${props.id}/edit`} state={props}><img src="crud-operations/svg/pencil-crud.svg" alt="pencil" /></Link>
        <img src="crud-operations/svg/pencil-crud.svg" alt="bucket" onClick={deleteStudent} />
        <ToastContainer />
      </td>
    </tr>

  );
};

export default StudentsItem;
