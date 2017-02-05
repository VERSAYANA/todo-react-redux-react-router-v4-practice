import { connect } from 'react-redux';
import TodosComponent from '../components/TodosComponent';

const currentTag = (lists, match) => {
  return lists.find(x => x.path === match.url).title
};

const listTodos = (list, todos) => {
  return todos.filter(x => x.list === list || list === 'All')
};

const mapStateToProps = (state, props) => ({
  filter: state.filter,
  list: currentTag(state.lists, props.match),
  todos: listTodos(currentTag(state.lists, props.match), state.todos)
});

let nextTodoId = 0;

const mapDispatchToProps = ({
  toggleFilter: () => ({
    'type': 'TOGGLE_FILTER'
  }),
  addTodo: (text, list) => ({
    'type': 'ADD_TODO',
    text,
    list,
    'id': nextTodoId++
  }),
  complete: (id) => ({
    'type': 'COMPLETE_TODO',
    id
  })
});

const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosComponent);

export default Todos;
