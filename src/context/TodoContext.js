import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../const.js/const";
export const todoContext = createContext();

const TodoContext = ({ children }) => {
  const INIT_STATE = {
    todos: [],
    oneTodo: {},
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_TODOS":
        return { ...state, todos: action.payload };
      case "GET_ONE_TODO":
        return { ...state, oneTodo: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // GET
  const getTodos = async () => {
    const { data } = await axios(`${API}/users`);
    dispatch({ type: "GET_TODOS", payload: data });
  };
  // GET_ONE_TODO
  const getOneTodo = async (id) => {
    const { data } = await axios(`${API}/posts?userId=${id}`);
    dispatch({
      type: "GET_ONE_TODO",
      payload: data,
    });
  };
  const values = {
    todos: state.todos,
    oneTodo: state.oneTodo,
    getTodos,
    getOneTodo,
  };
  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default TodoContext;
