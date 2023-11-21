import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/index.jsx";
import { Login } from "./pages/auth/Login/index.jsx";
import { About } from "./pages/about/index.jsx";
import { SoftSkill } from "./pages/services/SoftSkill/index.jsx";
import { HardSkill } from "./pages/services/HardSkill/index.jsx";
import { Advice } from "./pages/services/Advice/index.jsx";
import { Register } from "./pages/auth/Register/index.jsx";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services/softskill",
    element: <SoftSkill />,
  },
  {
    path: "/services/hardskill",
    element: <HardSkill />,
  },
  {
    path: "/services/advice",
    element: <Advice />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
