import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import {
  Main,
  About,
} from "./components/pages";

function router() {
  return createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/main", element: <Main /> },
        { path: "/about", element: <About /> },
      ],
    },
  ]);
}
export default router;
