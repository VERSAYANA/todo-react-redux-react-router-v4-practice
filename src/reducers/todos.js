const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        text: action.text,
        completed: false,
        list: action.list,
        id: action.id
      };

    case "COMPLETE_TODO":
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed
        };
      }
      return state;

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];

    case "COMPLETE_TODO":
      return state.map(t => todo(t, action));

    case "DELETE_LIST":
      return state.filter(x => x.list !== action.title)

    default:
      return state;

  }
};

export default todos;
