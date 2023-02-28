import React from "react";

const InformSearch = () => {
  return (
    <div className="information__forms-container">
      <a><img src="./svg/button-crud.svg" className="information__img-arrow" /></a>
      <div className="information__inputs-container">
        <form>
          <input type="search" name="search" placeholder="Search..." className="information__input" />
        </form>
        <img src="./svg/bell-crud.svg" className="information__bell-button" alt="bell" />
      </div>
    </div>
  );
};

export default InformSearch;
