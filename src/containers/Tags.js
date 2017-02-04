import { connect } from 'react-redux';
import TagsComponent from '../components/TagsComponent';



const mapStateToProps = (state) => ({
  tags: state.tags
});
const mapDispatchToProps = ({
  addTag: (name) => ({
    'type': 'ADD_TAG',
    name
  }),

});


const Tags = connect(mapStateToProps, mapDispatchToProps)(TagsComponent);

export default Tags;
