import React from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (<ul className="sidebar__list">
    <MenuItem title="Home" imgpath="./svg/hause-crud.svg" url="/home" />
    <MenuItem title="Course" imgpath="./svg/bookmark-crud.svg" url="/course" />
    <MenuItem title="Students" imgpath="./svg/Hat-crud.svg" url="/students" />
    <MenuItem title="Payment" imgpath="./svg/Dollar-crud.svg" url="/payment" />
    <MenuItem title="Report" imgpath="./svg/page-crud.svg" url="/report" />
    <MenuItem title="Settings" imgpath="./svg/mixing-console-crud.svg" url="/settings" />
  </ul>);
};

export default Menu 
