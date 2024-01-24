import React, { useContext, useEffect } from "react";
import { todoContext } from "../context/TodoContext";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const { oneTodo, getOneTodo } = useContext(todoContext);
  const { id } = useParams();
  useEffect(() => {
    getOneTodo(id);
  }, [id]);
  console.log(oneTodo);
  return (
    <div>
      {Array.isArray(oneTodo) &&
        oneTodo.map((elem) => <h3 key={elem.id}>{elem.title}</h3>)}
      {/* <h3>{oneTodo.title}</h3> */}
    </div>
  );
};

export default TodoDetail;
