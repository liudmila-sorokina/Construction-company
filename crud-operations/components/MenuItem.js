import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <li className="sidebar__item">
      <img src={props.imgpath} alt="house" className="sidebar__img" />
      <Link className="sidebar__link" to={props.url}>{props.title}</Link>
    </li>
  );
};

export default MenuItem 
