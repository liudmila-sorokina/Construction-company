import React from "react";
import InformSearch from "../InformSearch";
import StudentsItem from "../StudentsItem";

const Students = () => {
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
        <StudentsItem photopath="#" name="Karthi" email="karthi@gmmail.com" phone="7305477760" number="1234567305477760" date="08-Dec, 2021" />
        <StudentsItem photopath="#" name="Ron" email="ron@gmmail.com" phone="7404455560" number="3333367305477760" date="01-Dec, 2021" />
        <StudentsItem photopath="#" name="Ann" email="ann@gmmail.com" phone="7202433360" number="5555567305477760" date="02-Dec, 2021" />
      </table>
    </section>
  );
};

export default Students;
