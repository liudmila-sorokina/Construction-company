import React, { useEffect, useState } from "react";
import InformSearch from "../InformSearch";
import StudentsItem from "../StudentsItem";
import axios, { isCancel, AxiosError } from "axios";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const config = {
  method: 'get',
  url: 'https://users-e87a.restdb.io/rest/students',
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': '63e26aaf478852088da67e61'
  }
};

const Students = (props) => {
  const [state, setState] = useState([]);
  const [studentsDefault, setStudentsDefault] = useState([]);
  const [sortOrderForvard, setSortOrderForvard] = useState(true);

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

      toast("This is students's filter");
    }
    else {
      const studentsArray = [...state];
      studentsArray.sort((x, y) => x.name < y.name ? 1 : -1);
      setState(studentsArray);

      toast("This is students's filter");
    }

    setSortOrderForvard(!sortOrderForvard)
  };


  return (
    <section className="students-list">
      <InformSearch students={state} setSearchResalt={setState} studentsDefault={studentsDefault} value3={props.value2} />
      <div className="students-list__search">
        <h2 className="students-list__title">
          Students List
        </h2>
        <div>Debtors</div>
        <div className="students-list__buttons-container">

          <img src="./svg/arrows-up-down-crud.svg" alt="arrows up down" onClick={onClick} />
          <ToastContainer />
          <Link className="students-list__button" to="/students/new">ADD NEW STUDENT</Link>
        </div>
      </div>
      <table className="students-list__table">
        <thead className="students-list__thead">
          <StudentsItem name="Name" email="Email" phone="Phone" number="Enroll Number" date="Date of admission" />
        </thead>
        <tbody>
          {state && state.map((student) => <StudentsItem photopath="#" name={student.name} email={student.email} phone={student.phone} number={student.number} date={student.date} key={student.name} id={student._id} students={state} setStudents={setState} />)}
        </tbody>
      </table>
    </section>
  );
};

export default Students;
