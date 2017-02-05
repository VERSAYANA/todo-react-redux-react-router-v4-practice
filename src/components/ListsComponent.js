import React from "react";
import ListLink from "./ListLink";

const ListsComponent = ({ lists, addTag, match }) => {
  let input;
  return (
    <div id="sidebar">
      <form
        id="addlist-form"
        onSubmit={e => {
          e.preventDefault();
          addTag(input.value);
          input.value = "";
        }}
      >
        <input ref={node => input = node} placeholder="Create List" />
        <button type="submit">+</button>
      </form>

      <div id="lists-container">
        {lists.map((t, i) => (
          <ListLink
            key={i}
            count={t.count}
            title={t.title}
            path={t.path}
            active={t.path === match.url}
          />
        ))}
      </div>

    </div>
  );
};

export default ListsComponent;
