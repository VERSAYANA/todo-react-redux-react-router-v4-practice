import { connect } from 'react-redux';
import TagsComponent from '../components/TagsComponent';

const getNumber = (todo, tag) => {
  return todo.reduce((num, x) => {
    console.log(x)
    return (tag.title === x.tag || tag.title === 'All') && !x.completed ? num + 1 : num;
  }, 0);
};

const number = (todos, tags) => {
  return tags.map(t => ({
      ...t,
      count: getNumber(todos, t) || ''
    }));
};



const mapStateToProps = (state) => ({
  tags: number(state.todos, state.tags)
});
const mapDispatchToProps = ({
  addTag: (name) => ({
    'type': 'ADD_TAG',
    name
  }),

});


const Tags = connect(mapStateToProps, mapDispatchToProps)(TagsComponent);

export default Tags;
