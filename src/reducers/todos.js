const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        "text": action.text,
        "completed": false,
        "tag": action.tag,
        "id": action.id
      };

    case 'COMPLETE_TODO':
      if(state.id === action.id) {
        return {
          ...state,
          "completed": !state.completed
        };
      }
      return state;

    default: return state;
  }
};

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'COMPLETE_TODO':
      return state.map(t => todo(t, action));

    default: return state;

  }
};

export default todos;
