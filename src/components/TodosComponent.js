import React from "react";

const TodosComponent = (
  { filter, todos, list, toggleFilter, addTodo, complete }
) => {
  let input;

  return (
    <div id="mainbar">
      <div id="addtodo-container">
        <form
          id="addtodo-form"
          onSubmit={e => {
            e.preventDefault();
            addTodo(input.value, list);
            input.value = "";
          }}
        >
          <input placeholder="Add New Todo" ref={node => input = node} />
          <button type="submit">+</button>
        </form>

        <div id="checkbox-container">
          <div>
            <label htmlFor="check-filter">Show Completed Todos</label>
            <input
              id="check-filter"
              onChange={() => toggleFilter()}
              type="checkbox"
              checked={filter}
            />
          </div>
        </div>

      </div>

      <div id="todos">

        {todos
          .filter(x => !x.completed)
          .map((x, i) => (
            <div className="todo-container" key={i}>
              <span className="todo" onClick={() => complete(x.id)}>
                {x.text}
              </span>
            </div>
          ))}
      </div>

      <div id="not-completed-todo">
        {filter
          ? todos
              .filter(x => x.completed)
              .map((x, i) => (
                <div className="todo-container" key={i}>
                  <span
                    className="todo"
                    style={{ textDecoration: "line-through" }}
                    onClick={() => complete(x.id)}
                  >
                    {x.text}
                  </span>
                </div>
              ))
          : ""}

      </div>

    </div>
  );
};

export default TodosComponent;
