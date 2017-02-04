import React from 'react';
import { Link } from 'react-router-dom';
import TagLink from './TagLink';

const TagsComponent = (props) => {
  const { tags, addTag, activeTag, match } = props;
  let input;
  return(
    <div id="sidebar">
      <form id="addtag-form"
        onSubmit={(e) =>{
          e.preventDefault(); addTag(input.value);input.value=''
        }
      }>
        <input ref={(node) => input=node} placeholder="Create List"></input>
        <button type="submit">+</button>
      </form>

      <div id="tags-container">
        {tags.map((t, i) =>
          <TagLink key={i} title={t.title} path={t.path} active={t.path===match.url}/>
        )}
      </div>

    </div>
  );

};

export default TagsComponent;
