import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home';
import AppDetail from '../pages/AppDetail';
import ManageApps from '../pages/ManageApps';
import ManageActions from '../pages/ManageActions';
import ManageTools from '../pages/ManageTools';
import ManageMaps from '../pages/ManageMaps';
import ManageKnowledge from '../pages/ManageKnowledge';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'app/:id',
        element: <AppDetail />,
      },
      {
        path: 'manage/apps',
        element: <ManageApps />,
      },
      {
        path: 'manage/actions',
        element: <ManageActions />,
      },
      {
        path: 'manage/tools',
        element: <ManageTools />,
      },
      {
        path: 'manage/maps',
        element: <ManageMaps />,
      },
      {
        path: 'manage/knowledge',
        element: <ManageKnowledge />,
      },
    ],
  },
]);
