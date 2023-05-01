import React from "react";
import axios, { isCancel, AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";

const StudentsForm = () => {

  const onClick = (evt) => {
    evt.preventDefault();

    toast("added new student");

    const studentsEmail = document.querySelector('[name="email"]').value;
    const studentsPhone = document.querySelector('[name="phone"]').value;
    const studentsName = document.querySelector('[name="name"]').value;

    const studentsData = JSON.stringify({
      email: studentsEmail,
      phone: studentsPhone,
      name: studentsName
    });

    const config = {
      method: 'post',
      url: 'https://users-e87a.restdb.io/rest/students',
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63e26aaf478852088da67e61'
      },
      data: studentsData
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
      <h1>Create new student</h1>
      <form className="students-form" action="#" method="post">
        <label className="students-form__label">
          email
          <input type="email" name="email" placeholder="email" className="students-form__input" />
        </label>
        <label className="students-form__label">
          phone
          <input type="phone" name="phone" placeholder="phone" className="students-form__input" />
        </label>
        <label className="students-form__label">
          name
          <input type="text" name="name" placeholder="name" className="students-form__input" />
        </label>
        <input type="submit" value="submit" name="submit" className="students-form__button" onClick={onClick} />
        <ToastContainer />
      </form>
    </>
  );
};

export default StudentsForm;
