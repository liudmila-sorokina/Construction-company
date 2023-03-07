import React, { useEffect, useState } from "react";
import InformSearch from "../InformSearch";
import StudentsItem from "../StudentsItem";
import axios, { isCancel, AxiosError } from "axios";

var config = {
  method: 'get',
  url: 'https://users-e87a.restdb.io/rest/students',
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': '63e26aaf478852088da67e61'
  }
};

const Students = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios(config)
    .then(function (response) {
      setState(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  return (
    <section className="students-list">
      <InformSearch />
      <div className="students-list__search">
        <h2 className="students-list__title">
          Students List
        </h2>
        <div className="students-list__buttons-container">
          <button className="students-list__filter">
            <img src="./svg/arrows-up-down-crud.svg" alt="arrows up down" />
          </button>
          <button className="students-list__button">ADD NEW STUDENT</button>
        </div>
      </div>
      <table className="students-list__table">
        <StudentsItem name="Name" email="Email" phone="Phone" number="Enroll Number" date="Date of admission" />
        {state.map((student) => <StudentsItem photopath="#" name={student.name} email={student.email} phone={student.phone} number={student.number} date={student.date} key={student.name} />)}
      </table>
    </section>
  );
};

export default Students;
