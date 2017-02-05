import { Link } from "react-router-dom";
import React from "react";

const ListLink = ({ title, path, active, count, deleteList, replace }) => {
  const style = active ? "lists active-list" : "lists";
  return (
    <div id="list-container">
      <div id="list-item">
        {title !== 'All' ? (
          <span id="delete-list"
            onClick={() => {deleteList(title); if(active) replace('/list/all')}}>
            &#x274C;
          </span>) : ('')
        }

        <Link to={path} className={style} style={{flex: 1}}>
          <span>{title}</span>
          <span id="list-counter">{count}</span>
        </Link>
      </div>
    </div>
  );
};

export default ListLink;
