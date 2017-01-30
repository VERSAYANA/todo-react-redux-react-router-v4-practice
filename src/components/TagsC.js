import React from 'react';

const TagsC = ({ tags, addTag, activeTag }) => {
  let input;
  return(
    <div id="sidebar">
      <form id="addtag-form" onSubmit={(e) => {e.preventDefault(); addTag(input.value);input.value=''}}>
        <input ref={(node) => input=node}></input>
        <button type="submit">+</button>
      </form>

      <div id="tags-container">

        {tags.map((t, i) => <div onClick={() => activeTag(t.name)} className={t.class} key={i}>{t.name}</div>)}

      </div>

    </div>
  );

};

export default TagsC;
