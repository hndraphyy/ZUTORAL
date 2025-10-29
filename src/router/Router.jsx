import { createBrowserRouter, Navigate } from 'react-router-dom'; 
import LoginPage from '../pages/auth/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />, 
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: "",
  }
]);

export default router;