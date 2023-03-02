import React from "react";

const WigetsItem = (props) => {
  return (
    <li className={`information__item ${props.modifier}`} alt="hat">
      <img src={props.wigetsImg} alt={props.alt} className="information__img-hat" />
      <h6 className="information__items-name">{props.title}</h6>
      <h3 className="information__quantity">{props.quantity}</h3>
    </li>
  );
};

export default WigetsItem
