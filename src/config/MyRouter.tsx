import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';





const Dashboardpages = lazy(() => import('../pages/dashboard/dashboardpages'));

const AuthWrapper = lazy(() => import('./AuthWarpper'));

export const MyRouter = createBrowserRouter([
  {
    path: '/',
    element: <AuthWrapper />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboardpages />
      },
      
     
    ]
  },
  {
    path: 'login',
    element: <Dashboardpages />
  },
 
]);
