import React from "react";
import axios, { isCancel, AxiosError } from "axios";

const CoursesForm = () => {


  const onClick = (evt) => {
    evt.preventDefault();

    const coursesTitle = document.querySelector(`[name="title"]`).value;
    const coursesDescription = document.querySelector(`[name="description"]`).value;
    const coursesHourses = document.querySelector(`[name="hours"]`).value;

    const coursesData = JSON.stringify({
      title: coursesTitle,
      description: coursesDescription,
      how_many_hours: coursesHourses
    });

    const config = {
      method: 'post',
      url: 'https://users-e87a.restdb.io/rest/courses',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63e26aaf478852088da67e61'
      },
      data: coursesData
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <h1>Create new course</h1>
      <form className="students-form" action="#" method="post">
        <label className="students-form__label">
          title
          <input type="text" name="title" placeholder="title" className="students-form__input" />
        </label>
        <label className="students-form__label">
          description
          <input type="text" name="description" placeholder="description" className="students-form__input" />
        </label>
        <label className="students-form__label">
          hours
          <input type="number" name="hours" placeholder="hours" className="students-form__input" />
        </label>
        <input type="submit" value="submit" name="submit" className="students-form__button" onClick={onClick} />
      </form>
    </>
  );
};

export default CoursesForm;
