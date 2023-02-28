import React from "react";
import WigetsItem from "./WigetsItem";
import InformSearch from "./InformSearch";

const Information = () => {
  return (<section className="information">

    <InformSearch />
    <ul className="information__list">
      <WigetsItem wigetsImg="./svg/Hat-crud.svg" title="Students" quantity="243" modifier="information__item-blue" alt="hat" />
      <WigetsItem wigetsImg="./svg/bookmark-crud.svg" title="Course" quantity="13" modifier="information__item-pink" alt="bookmark" />
      <WigetsItem wigetsImg="./svg/Dollar-crud.svg" title="Payments" quantity="INR 556,000" modifier="information__item-orange" alt="dollar" />
      <WigetsItem wigetsImg="./svg/human-crud.svg" title="Users" quantity="3" modifier="information__item-gradient" alt="humans symbol" />
    </ul>
  </section>);
};

export default Information;
