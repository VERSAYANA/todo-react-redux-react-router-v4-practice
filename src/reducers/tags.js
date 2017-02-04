import { firstTags } from './firstState';

const tag = (state, action) => {
  switch(action.type) {
    case 'ADD_TAG':
      return {
        title: action.name,
        path: `/todo/${action.name.toLowerCase().split(' ').join('-')}`
      };
  }
};

const tags = (state = firstTags, action) => {
  switch(action.type) {
    case 'ADD_TAG':
      return [
        ...state,
        tag(undefined, action)
      ];
    default: return state
  }
};

export default tags;
