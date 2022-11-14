import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import SideBar from '../components/side-bar/side-bar.jsx';
export default function PrivateRoute({ children, loginPage = false }) {
  const { currentUser } = useAuth();

  if (loginPage) return currentUser ? <Navigate to='/' /> : children;
  else
    return currentUser ? (
      <>
        <SideBar />
        {children}
      </>
    ) : (
      <Navigate to='/signin' />
    );
}
