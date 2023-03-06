import React from "react";
import MenuItem from "./MenuItem";

const itemsArray = [
  {
    title: "Home",
    imgpath: "./svg/hause-crud.svg",
    url: "/home"
  },
  {
    title: "Course",
    imgpath: "./svg/bookmark-crud.svg",
    url: "/course"
  },
  {
    title: "Students",
    imgpath: "./svg/Hat-crud.svg",
    url: "/students"
  },
  {
    title: "Payment",
    imgpath: "./svg/Dollar-crud.svg",
    url: "/payment"
  },
  {
    title: "Report",
    imgpath: "./svg/page-crud.svg",
    url: "/report"
  },
  {
    title: "Settings",
    imgpath: "./svg/mixing-console-crud.svg",
    url: "/settings"
  }
]

const Menu = () => {
  return (<ul className="sidebar__list">
    {itemsArray.map((item) => <MenuItem title={item.title} imgpath={item.imgpath} url={item.url} key={item.title} />)}
  </ul>);
};

export default Menu 
