import { connect } from 'react-redux';
import TodosC from '../components/TodosC';

const currentTag = (tags, match) => {
  return tags.find(x => x.path === match.url).title
};

const tagTodos = (tag, todos) => {
  return todos.filter(x => x.tag === tag || tag === 'All')
};

const mapStateToProps = (state, props) => ({
  filter: state.filter,
  tag: currentTag(state.tags, props.match),
  todos: tagTodos(currentTag(state.tags, props.match), state.todos)
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
