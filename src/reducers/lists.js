import { firstLists } from "./firstState";

const list = (state, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      return {
        title: action.title,
        path: `/list/${action.title.toLowerCase().split(" ").join("-")}`
      };

    default:
      return state;
  }
};

const lists = (state = firstLists, action) => {
  switch (action.type) {
    case "CREATE_LIST":
      if(!state.find(s => s.title === action.title)) {
        return [...state, list(undefined, action)];
      } else return state;

    case "DELETE_LIST":
      return state.filter(s => s.title !== action.title);

    default:
      return state;
  }
};

export default lists;
