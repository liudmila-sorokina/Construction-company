import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CoursesUpdate = () => {
  const [state, setState] = useState({});
  const location = useLocation()

  useEffect(() => {
    console.log('LOCATIO132: ', location)
    setState(location.state)
  }, []);

  const tempor = location.pathname.replace('/courses/', '')

  const courseId = tempor.replace('/edit', '')

  const titleChange = (evt) => {
    const newState = { ...state, title: evt.target.value }
    setState(newState)
  };

  const descriptionChange = (evt) => {
    const newState = { ...state, description: evt.target.value }
    setState(newState)
  };

  const hoursChange = (evt) => {
    const newState = { ...state, hours: evt.target.value }
    setState(newState)
  };

  const onClick = (evt) => {
    evt.preventDefault();

    toast("course updated");

    const obj = {}
    obj.title = state.title
    obj.description = state.description
    obj.how_many_hours = state.hours

    const coursesDataChange = JSON.stringify(obj);

    const config = {
      method: 'put',
      url: `https://users-e87a.restdb.io/rest/courses/${courseId}`,
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63e26aaf478852088da67e61'
      },
      data: coursesDataChange
    };

    axios(config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <form className="students-form" action="#" method="put">
        <label className="students-form__label">
          title
          <input type="text" name="title" placeholder="title" className="students-form__input" value={state.title} onChange={titleChange} />
        </label>
        <label className="students-form__label">
          description
          <input type="text" name="description" placeholder="description" className="students-form__input" value={state.description} onChange={descriptionChange} />
        </label>
        <label className="students-form__label">
          hours
          <input type="number" name="hours" placeholder="hours" className="students-form__input" value={state.hours} onChange={hoursChange} />
        </label>
        <input type="submit" value="submit" name="submit" className="students-form__button" onClick={onClick} />
        <ToastContainer />
      </form>
    </>
  );
};
export default CoursesUpdate;
