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
import { Leadership } from "./pages/services/SoftSkill/Leadership/index.jsx";
import { Popular } from "./pages/services/SoftSkill/Popular/index.jsx";
import { DetailMentors } from "./pages/services/HardSkill/DetailsMentors/index.jsx";
import { Register } from "./pages/auth/Register/index.jsx";
import { CareerPath } from "./pages/services/HardSkill/CareerPath/index.jsx";
import { Enroll } from "./pages/services/HardSkill/Enroll/index.jsx";
import { Mentor } from "./pages/services/HardSkill/Mentor/index.jsx";

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
    path: "/service/softskill/leadership",
    element: <Leadership />,
  },
  {
    path: "/service/softskill/popular",
    element: <Popular />,
  },
  {
    path: "/service/hardskill/enroll",
    element: <Enroll />,
  },
  {
    path: "/service/hardskill/mentor",
    element: <Mentor />,
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
  {
    path: "services/hardskill/detailMentor",
    element: <DetailMentors />,
  },
  {
    path: "/services/hardskill/careerpath",
    element: <CareerPath />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
