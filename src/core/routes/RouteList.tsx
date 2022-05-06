import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const RouteList = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} key={index} element={route.component} />
      ))}
    </Routes>
  );
};
