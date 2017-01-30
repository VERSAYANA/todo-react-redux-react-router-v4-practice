import React from 'react';

const TodosC = ({ filter, toggleFilter, notCompletedTodos, completedTodos, addTodo, tag, complete }) => {
  let input;
  console.log(notCompletedTodos);
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

        {notCompletedTodos.map((x, i) =>
        <div className="todo-container" key={i}>
          <span className="todo" onClick={() => complete(x.id)}>{x.text}</span>
        </div>)}

        {filter ? completedTodos.map((x, i) =>
          <div className="todo-container" key={i}>
            <span className="todo completed-todo" onClick={() => complete(x.id)}>{x.text}</span>
          </div>):<div></div>}
          
      </div>


    </div>
  )
};

export default TodosC;
