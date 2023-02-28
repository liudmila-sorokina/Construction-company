import React from "react";

const User = (props) => {
  return (<div className="sidebar__user">
    <img src="./users-photo.png" alt="users photo" className="sidebar__photo" />
    <h3 className="sidebar__name">{ props.name }</h3>
    <h6 className="sidebar__status">{ props.status}</h6>
  </div>);
};

export default User
