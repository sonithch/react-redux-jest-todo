const initialState = {
  todos: [],
};

const nextTodoId = (todos) => {
  return todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };

    default:
      return state;
  }
};
