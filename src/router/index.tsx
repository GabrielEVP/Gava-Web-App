// src/router/index.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, RouteProps } from 'react-router-dom';
import HomeView from '@/views/HomeView';
import LoginView from '@views/login/LoginView';
import ClientView from '@views/client/ClientView';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <LoginView />,
  },
  {
    path: '/clients/:id',
    element: <ClientView />,
    meta: { requiresAuth: true },
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
