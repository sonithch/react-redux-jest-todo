import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { todos } = useSelector((state) => state.todos);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    const trimmedText = e.target.value.trim();
    if (e.which == 13 && trimmedText) {
      dispatch({ type: "addTodo", payload: trimmedText });
      setText("");
    }
  };

  return (
    <div data-testid="todoContainerComponent">
      <input
        placeholder="Add a new todo"
        value={text}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />

      <ul>{todos && todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}</ul>
    </div>
  );
};

export default TodoContainer;
