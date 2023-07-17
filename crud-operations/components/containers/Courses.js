import React, { useEffect, useState } from "react";
import InformSearch from "../InformSearch";
import CoursesItem from "../CoursesItem";
import axios from "axios";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';

import { ADD_COURSES } from "../../actions/constants"

const config = {
  method: 'get',
  url: 'https://users-e87a.restdb.io/rest/courses',
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': '63e26aaf478852088da67e61'
  }
};

const Courses = () => {

  const [coursesDefault, setCoursesDefault] = useState([])
  const [sortOrderForvard, setSortOrderForvard] = useState(true)

  const dispatch = useDispatch()
  const courses = useSelector((store) => store.courses)

  useEffect(() => {

    axios(config)

      .then((respons) => {
        const addCoursesAction = { type: ADD_COURSES, payload: respons.data}
        dispatch(addCoursesAction)
        setCoursesDefault(respons.data)
      })

      .catch((error) => (console.log(error)))
  }, [])

  const onClickUp = (evt) => {
    if (sortOrderForvard == true) {
      const coursesArray = [...courses]
      coursesArray.sort((x, y) => x.title > y.title ? 1 : -1)
      dispatch({type: ADD_COURSES, payload: coursesArray})

      toast("This is filter!")
    }
    else {
      const coursesArray = [...courses]
      coursesArray.sort((x, y) => x.title < y.title ? 1 : -1)
      dispatch({type: ADD_COURSES, payload: coursesArray})

      toast("This is filter!")
    }

    setSortOrderForvard(!sortOrderForvard)
  };

  return (

    <section className="courses-list">
      <div className="students-list__search">
        <h2 className="students-list__title">
          Courses List
        </h2>
        <div>Deptors</div>
        <ToastContainer />
        <div className="students-list__buttons-container">

          <img src="./svg/arrows-up-down-crud.svg" alt="arrows up down" onClick={onClickUp} />

          <Link className="students-list__button" to="/courses/new">ADD NEW COURSE</Link>
        </div>
      </div>
      <table className="courses-list__table">
        <thead>
          <tr className="courses-list__table-row">
            <th className="courses-list__table-head">title</th>
            <th className="courses-list__table-head">description</th>
            <th className="courses-list__table-head">hours</th>
          </tr>
        </thead>
        <tbody>

          {courses.map((course) => <CoursesItem
            title={course.title}
            description={`${course.description.substr(0, 20)}...`}
            hours={course.how_many_hours}
            id={course._id}
            key={course.title}
          />)}
          
        </tbody>
      </table>
    </section>
  )
};

export default Courses;
