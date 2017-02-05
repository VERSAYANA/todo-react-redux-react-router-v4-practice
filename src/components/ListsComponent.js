import React from 'react';
import { Link } from 'react-router-dom';
import ListLink from './ListLink';

const ListsComponent = (props) => {
  const { lists, addTag, activeTag, match } = props;
  let input;
  return(
    <div id="sidebar">
      <form id="addlist-form"
        onSubmit={(e) =>{
          e.preventDefault(); addTag(input.value);input.value=''
        }
      }>
        <input ref={(node) => input=node} placeholder="Create List"></input>
        <button type="submit">+</button>
      </form>

      <div id="lists-container">
        {lists.map((t, i) =>
          <ListLink key={i} count={t.count} title={t.title} path={t.path} active={t.path===match.url}/>
        )}
      </div>

    </div>
  );

};

export default ListsComponent;
