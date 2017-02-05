import { firstLists } from './firstState';

const list = (state, action) => {
  switch(action.type) {
    case 'CREATE_LIST':
      return {
        title: action.name,
        path: `/list/${action.name.toLowerCase().split(' ').join('-')}`
      };
    default: return state;
  }
};

const lists = (state = firstLists, action) => {
  switch(action.type) {
    case 'CREATE_LIST':
      return [
        ...state,
        list(undefined, action)
      ];
    default: return state
  }
};

export default lists;
