import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const StudentsUpdate = () => {
  //деструктурирующее присваивание. Есть функция юзстате, связывающая в своем теле стате и сетстате. Мы не видим это тело. В аргументе функции юзстате пустой обьект. Присваиваем этот пустой массив стате.
  const [state, setState] = useState({});


  //присваиваем переменной хук юзлокатион, чтобы использовать ее впоследствии для вычленения id студента
  const location = useLocation()

  useEffect(() => {
    setState(location.state)
  }, []);


  const temp = location.pathname.replace('/students/', '')

  const studentId = temp.replace('/edit', '')



  const emailChange = (evt) => {
    const newState = { ...state, email: evt.target.value }
    setState(newState)
  };

  const phoneChange = (evt) => {
    const newState = { ...state, phone: evt.target.value }
    setState(newState)
  }

  const nameChange = (evt) => {
    const newState = { ...state, name: evt.target.value }
    setState(newState)
  }

  const onClick = (evt) => {
    evt.preventDefault();

    toast("Student updated");

    const studentsDataChange = JSON.stringify(state);

    const config = {
      method: 'put',
      url: `https://users-e87a.restdb.io/rest/students/${studentId}`,
      headers: {
        'Content-Type': 'application/json',
        'x-apikey': '63e26aaf478852088da67e61'
      },
      data: studentsDataChange
    };



    axios(config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <form className="students-form" action="#" method="put">
        <label className="students-form__label">
          email
          <input type="email" name="email" placeholder="email" className="students-form__input" value={state.email} onChange={emailChange} />
        </label>
        <label className="students-form__label">
          phone
          <input type="phone" name="phone" placeholder="phone" className="students-form__input" value={state.phone} onChange={phoneChange} />
        </label>
        <label className="students-form__label">
          name
          <input type="text" name="name" placeholder="name" className="students-form__input" value={state.name} onChange={nameChange} />
        </label>
        <input type="submit" value="submit" name="submit" className="students-form__button" onClick={onClick} />
        <ToastContainer />
      </form>
    </>
  );

};

export default StudentsUpdate;
