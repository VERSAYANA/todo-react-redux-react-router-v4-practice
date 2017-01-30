import { connect } from 'react-redux';
import TagsC from '../components/TagsC';

const myTags = (tags) => {
  return tags.map(t => {
    if(t.active) {
      return {
        "name": t.name,
        "class": "tags active-tag"
      };
    } else {
      return {
        "name": t.name,
        "class": "tags"
      };
    }
  })
};

const mapStateToProps = (state) => ({
  tags: myTags(state.tags)
});
const mapDispatchToProps = ({
  addTag: (name) => ({
    'type': 'ADD_TAG',
    name
  }),
  activeTag: (name) => ({
      'type': 'ACTIVE_TAG',
      name
    }),
});
// const mapDispatchToProps = (dispatch) => ({
//   addTag: (name) => {
//     dispatch({
//       'type': 'ADD_TAG',
//       name
//     });
//   },
//   activeTag: (name) => {
//     dispatch({
//       'type': 'ACTIVE_TAG',
//       name
//     });
//   },
// });



const Tags = connect(mapStateToProps, mapDispatchToProps)(TagsC);

export default Tags;
