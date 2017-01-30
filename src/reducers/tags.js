import { firstTags } from './firstState';

const tag = (state, action) => {
  switch(action.type) {
    case 'ADD_TAG':
      return {
        "name": action.name,
        "active": false
      };

    case 'ACTIVE_TAG':
      if(state.name === action.name) {
        return {
          ...state,
          "active": true
        };
      } else {

        return {
          ...state,
          "active": false
        };
      }

    default: return state;
  }
};

const tags = (state = firstTags, action) => {
  switch(action.type) {
    case 'ADD_TAG':
      return [
        ...state,
        tag(undefined, action)
      ];

    case 'ACTIVE_TAG':
      return state.map(s => tag(s, action));

    default: return state;
  }
};

export default tags;
