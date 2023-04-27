import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Course = () => {
  const [state, setState] = useState([]);

  const location = useLocation()

  useEffect(() => {
    const courseId = location.pathname.replace('/courses/', '')

    const config = {
      method: 'get',
      url: `https://users-e87a.restdb.io/rest/courses/${courseId}`,
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63e26aaf478852088da67e61'
      }
    };

    axios(config)
      .then((response) => setState(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <section className="One-course">
        <div className="One-course__item One-course__title">{state.title}</div>
        <div className="One-course__item">{state.description}</div>
        <div className="One-course__item">{state.how_many_hours}</div>
      </section>
    </>
  );
};
export default Course;
