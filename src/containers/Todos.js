import { connect } from 'react-redux';
import TodosC from '../components/TodosC';

const activeTag = (tags) => {
  return tags.find(t => t.active).name;
};

const tagTodos = (todos, activeTag) => {
  if (activeTag === 'All') {
    return todos;
  } else {
    return todos.filter(t => t.tag === activeTag)
  }
};
const notCompletedTodos = (tagTodos) => {
  return tagTodos.filter(t => !t.completed);
};

const completedTodos = (tagTodos) => {
  return tagTodos.filter(t => t.completed);
};

// const visibleTodos = (notCompletedTodos, completedTodos, filter) => {
//   const v = [];
//   if(!filter) {
//     v[0] = notCompletedTodos;
//   } else {
//     v[1] = completedTodos;
//   }
//   return v;
// };

const mapStateToProps = (state) => ({
  filter: state.filter,
  notCompletedTodos: notCompletedTodos(tagTodos(state.todos, activeTag(state.tags))),
  completedTodos: completedTodos(tagTodos(state.todos, activeTag(state.tags))),
  tag: activeTag(state.tags)
});

let nextTodoId = 0;

const mapDispatchToProps = ({
  toggleFilter: () => ({
    'type': 'TOGGLE_FILTER'
  }),
  addTodo: (text, tag) => ({
    'type': 'ADD_TODO',
    text,
    tag,
    'id': nextTodoId++
  }),
  complete: (id) => ({
    'type': 'COMPLETE_TODO',
    id
  })
});

const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosC);

export default Todos;
