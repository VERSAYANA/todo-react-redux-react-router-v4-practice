import { Link } from 'react-router-dom';
import React from 'react';


const TagLink = (props) => {
  const { title, path, active, count } = props;
  const style = active ? 'tags active-tag' : 'tags'
  return (
    <div id="list-container">
      <Link to={path} className={style}>
        {title}
      </Link>
      <span id="list-counter" className={style}>{count}</span>
    </div>
  );
}

export default TagLink;
