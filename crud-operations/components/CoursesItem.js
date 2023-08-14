import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { DELETE_COURSE } from "../actions/constants"

import axios from "axios";

const CoursesItem = (props) => {

  const dispatch = useDispatch()
  const course = useSelector((store) => store.course)
  const config = {
    method: 'delete',
    url: `https://users-e87a.restdb.io/rest/courses/${props.id}`,
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': '63e26aaf478852088da67e61'
    }
  };

   const deleteCourse = () => {
    const deleteCourseAction = { type: DELETE_COURSE, payload: props.id }
    dispatch(deleteCourseAction)
    toast("Deleted course.");
  };

  return (
    <tr className="courses-list__table-row">
      <ToastContainer />
      <td className="courses-list__table-data"><Link to={`/courses/${props.id}`}>{props.title}</Link></td>
      <td className="courses-list__table-data">{props.description}</td>
      <td className="courses-list__table-data">{props.hours}</td>
      <td>
        <img src="crud-operations/svg/pencil-crud.svg" alt="bucket" onClick={deleteCourse} />
        {console.log('PROPSEIO:', props)}
        <Link to={`/courses/${props.id}/edit`} state={{ ...props }}><img src="crud-operations/svg/pencil-crud.svg" alt="pencil" /></Link>
      </td>
    </tr>
  );
};

export default CoursesItem;
