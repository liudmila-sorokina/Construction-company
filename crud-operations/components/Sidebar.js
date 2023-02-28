import React from "react";
import Menu from "./Menu";
import User from "./User";

const Sidebar = () => {
  return (<section className="sidebar">
    <h2 className="sidebar__logo">CRUD OPERATIONS</h2>
    
    <User name="Karthi Madesh" status="Admin" />
    <Menu />
   

    <div className="sidebar__links-container">
      <a href="#" className="sidebar__link">Logout</a>
      <img src="./svg/arrow-crud.svg" alt="arrow" className="sidebar__img sidebar__arrow-next" />
    </div>
  </section>);
};

export default Sidebar;
