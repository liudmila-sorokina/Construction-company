import React, { useEffect, useState } from "react";
import InformSearch from "../InformSearch";
import StudentsItem from "../StudentsItem";
import axios, { isCancel, AxiosError } from "axios";
import { Link } from "react-router-dom";

const config = {
  method: 'get',
  url: 'https://users-e87a.restdb.io/rest/students',
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': '63e26aaf478852088da67e61'
  }
};

const Students = () => {
  const [state, setState] = useState([]);
  const [studentsDefault, setStudentsDefault] = useState([]);
  const [sortOrderForvard, setSortOrderForvard] = useState(true)

  //Раньше
  //const obj = {a: { b: 3}}
  // const temp = obj['a']['b']
  // const temp = obj.a.b

  // // ES6
  //const {a: { b: temp}} = obj
  //то что в ключе a и в ключе b положи в переменную temp

  //деструктурирующее присваивание


  // //Раньше

  // const kekus = [1,2,3,4]
  // const first = kekus[0]
  // const second = kekus[1]
  // const third = kekus[2]

  // // ES6

  //   const [first, second, third] = kekus

  //в конфиге мы сохраняем то, что нам надо передать в бекэнд (описание http запроса), передаем конфиг аксиосу, который формирует из конфига http запрос и отправляет его на бекэнд и бекэнд понимает, что мы от него хотим


  useEffect(() => {
    axios(config)
      .then((response) => {
        setState(response.data)
        setStudentsDefault(response.data)
      })
      .catch((error) => console.log(error))

  }, [])

  const onClick = (evt) => {
    if (sortOrderForvard == true) {
      const studentsArray = [...state];
      studentsArray.sort((x, y) => x.name > y.name ? 1 : -1);
      setState(studentsArray);
    }
    else {
      const studentsArray = [...state];
      studentsArray.sort((x, y) => x.name < y.name ? 1 : -1);
      setState(studentsArray);
    }

    setSortOrderForvard(!sortOrderForvard)

  };



  return (
    <section className="students-list">
      <InformSearch students={state} setSearchResalt={setState} studentsDefault={studentsDefault} />
      <div className="students-list__search">
        <h2 className="students-list__title">
          Students List
        </h2>
        <div className="students-list__buttons-container">

          <img src="./svg/arrows-up-down-crud.svg" alt="arrows up down" onClick={onClick} />

          <Link className="students-list__button" to="/students/new">ADD NEW STUDENT</Link>
        </div>
      </div>
      <table className="students-list__table">
        <thead className="students-list__thead">
          <StudentsItem name="Name" email="Email" phone="Phone" number="Enroll Number" date="Date of admission" />
        </thead>
        <tbody>
          {state && state.map((student) => <StudentsItem photopath="#" name={student.name} email={student.email} phone={student.phone} number={student.number} date={student.date} key={student.name} id={student._id} />)}
        </tbody>
      </table>
    </section>
  );
};

export default Students;
