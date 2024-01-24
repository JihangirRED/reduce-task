import React, { useContext, useEffect } from "react";
import { todoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, getTodos } = useContext(todoContext);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos.map((elem) => (
        <TodoItem {...elem} key={elem.id} />
      ))}
    </div>
  );
}

export default TodoList;
