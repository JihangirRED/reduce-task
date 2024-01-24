import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import TodoDetail from "../components/TodoDetail";

const MainRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<TodoDetail />} />
    </Routes>
  );
};

export default MainRouts;
