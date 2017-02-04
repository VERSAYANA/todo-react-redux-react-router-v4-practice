import React from 'react';

const TodosC = ( props ) => {
  let input;
  console.log(props);
  const { filter, todos, tag, toggleFilter, addTodo, complete } = props;
  // const show = (t) => {
  //   t.map((x, i) => )
  // }
  return(
    <div id="mainbar">

      <form id="addtodo-form"
        onSubmit={(e) => {e.preventDefault(); addTodo(input.value, tag);input.value=''}}>
        <input ref={(node) => input=node}></input>
        <button type="submit">+</button>
      </form>

      <div id="checkbox">
        <span>Show Completed Todos</span>
        <input onChange={() => toggleFilter()} type="checkbox" checked={filter} />
      </div>

      <div id="todos">

        {todos.filter(x => !x.completed).map((x, i) =>
          <div className="todo-container" key={i}>
            <span className="todo" onClick={() => complete(x.id)}>{x.text}</span>
          </div>
        )}

        {filter ? todos.filter(x => x.completed).map((x, i) =>
          <div className="todo-container" key={i}>
            <span
              className="todo"
              style={{textDecoration: 'line-through'}}
              onClick={() => complete(x.id)}
            >
              {x.text}
            </span>
          </div>
        ): <div></div>}


      </div>


    </div>
  )
};

export default TodosC;
