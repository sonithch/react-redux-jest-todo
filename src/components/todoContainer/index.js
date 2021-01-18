import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import TodoItem from "../todoItem/";
import { addTodo } from "../../actions";

const TodoContainer = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const { todos } = useSelector((state) => state.todos);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    const trimmedText = e.target.value.trim();
    if (e.which === 13 && trimmedText) {
      dispatch(addTodo(trimmedText));
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

      <ul>{todos && todos.map((todo) => <TodoItem {...todo} />)}</ul>
    </div>
  );
};

export default TodoContainer;
