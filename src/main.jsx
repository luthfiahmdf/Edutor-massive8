import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/index.jsx';
import { Login } from './pages/auth/Login/index.jsx';
import { About } from './pages/about/index.jsx';
import { SoftSkill } from './pages/services/SoftSkill/index.jsx';
import { HardSkill } from './pages/services/HardSkill/index.jsx';
import { Advice } from './pages/services/Advice/index.jsx';
import { Leadership } from './pages/services/SoftSkill/Leadership/index.jsx';
import { Popular } from './pages/services/SoftSkill/Popular/index.jsx';
import { Popular2 } from './pages/services/SoftSkill/Popular2/index.jsx';
import { DetailMentors } from './pages/services/HardSkill/DetailsMentors/index.jsx';
import { Register } from './pages/auth/Register/index.jsx';
import { CareerPath } from './pages/services/HardSkill/CareerPath/index.jsx';
import { CareerPath2 } from './pages/services/HardSkill/CareerPath2/index.jsx';
import { Enroll } from './pages/services/HardSkill/Enroll/index.jsx';
import { Article } from './pages/services/Advice/Article/index.jsx';
import { EnrollSoft } from './pages/services/SoftSkill/EnrollSoft/index.jsx';
import { CareerPath3 } from './pages/services/HardSkill/CareerPath3/index.jsx';
import { ComingSoon } from './pages/ComingSoon/index.jsx';
import { Leadership2 } from './pages/services/SoftSkill/Leadership2/index.jsx';
import { EnrollSoft2 } from './pages/services/SoftSkill/EnrollSoft2/index.jsx';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/comingsoon',
    element: <ComingSoon />,
  },
  {
    path: '/services/softskill',
    element: <SoftSkill />,
  },

  {
    path: '/service/softskill/leadership',
    element: <Leadership />,
  },
  {
    path: '/service/softskill/leadership2',
    element: <Leadership2 />,
  },
  {
    path: '/service/softskill/popular',
    element: <Popular />,
  },
  {
    path: '/service/softskill/popular2',
    element: <Popular2 />,
  },
  {
    path: '/service/hardskill/careerpath2',
    element: <CareerPath2 />,
  },
  {
    path: '/service/hardskill/careerpath3',
    element: <CareerPath3 />,
  },
  {
    path: '/service/hardskill/enroll',
    element: <Enroll />,
  },
  {
    path: '/services/softskill',
    element: <SoftSkill />,
  },
  {
    path: '/services/hardskill',
    element: <HardSkill />,
  },
  {
    path: '/services/advice',
    element: <Advice />,
  },
  {
    path: 'services/hardskill/detailMentor',
    element: <DetailMentors />,
  },
  {
    path: '/services/hardskill/careerpath',
    element: <CareerPath />,
  },
  {
    path: '/service/advice/article',
    element: <Article />,
  },
  {
    path: '/services/softskill/enrollsoft',
    element: <EnrollSoft />,
  },
  {
    path: '/services/softskill/enrollsoft2',
    element: <EnrollSoft2 />,
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
