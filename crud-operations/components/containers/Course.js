import React from "react";
import InformSearch from "../InformSearch";
import CoursesItem from "../CoursesItem";

const Course = () => {
  return (
    <section className="courses-list">
      <InformSearch />
      <div className="students-list__search">
        <h2 className="students-list__title">
          Courses List
        </h2>
        <div className="students-list__buttons-container">
          <button className="students-list__filter">
            <img src="./svg/arrows-up-down-crud.svg" alt="arrows up down" />
          </button>
          <button className="students-list__button">ADD NEW COURSE</button>
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
          <CoursesItem title="Maths" description="deep course" hours="130h" />
          <CoursesItem title="Maths" description="deep course" hours="130h" />
          <CoursesItem title="Maths" description="deep course" hours="130h" />
        </tbody>
      </table>
    </section>
  )
};

export default Course;
