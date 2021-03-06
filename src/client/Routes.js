import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';



export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
