import { Link } from 'react-router-dom';
import React from 'react';


const TagLink = (props) => {
  const { title, path, active } = props;
  const style = active ? 'tags active-tag' : 'tags'
  return (
    <div>
      <Link to={path} className={style}>
        {title}
      </Link>
    </div>
  );
}

export default TagLink;
