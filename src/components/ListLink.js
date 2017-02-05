import { Link } from "react-router-dom";
import React from "react";

const ListLink = ({ title, path, active, count }) => {
  const style = active ? "lists active-list" : "lists";
  return (
    <div id="list-container">
      <Link to={path} className={style}>
        {title}
      </Link>
      <span id="list-counter" className={style}>{count}</span>
    </div>
  );
};

export default ListLink;
