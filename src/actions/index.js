export const toggleComplete = (id) => ({
  type: "toggleTodo",
  payload: {
    id: id,
  },
});

export const addTodo = (text) => ({
  type: "addTodo",
  payload: {
    text: text,
  },
});
