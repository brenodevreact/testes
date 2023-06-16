import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Home from './routes/Home';

const router = createBrowserRouter([{
  path: "/",
  element: (
    <App />
  ),
  children: [
    {
      path: "/",
      element: (
        <Home />
      )
    },

    {
      path: "/login",
      element: (
        <Login />
      )
    },
    {
      path: "/register",
      element: (
        <Register />
      )
    }
  ]
}
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
