import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import './App.css';
import Dashboard from './pages/dashboard';
import Invoices from './pages/invoices';
import MyWallet from './pages/myWallet';
import Settings from './pages/settings';
import Signin from './pages/signin';
import Transactions from './pages/transactions';
import Signup from './pages/signup';
import PrivateRoute from './routes/PrivateRoute';

export default function App() {
 
  return (
  
      <AuthContextProvider>
       
          <Routes>
            <Route
              index
              path='/'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
            index
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
            <Route
              path='/transactions'
              element={
                <PrivateRoute>
                  <Transactions />
                </PrivateRoute>
              }
            />
            <Route
            path='/invoices'
            element={
              <PrivateRoute>
                <Invoices />
              </PrivateRoute>
            }
          />
          <Route
          path='/myWallet'
          element={
            <PrivateRoute>
              <MyWallet />
            </PrivateRoute>
          }
        />
            <Route
              path='/settings'
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path='/signin'
              element={
                <PrivateRoute loginPage={true}>
                  <Signin />
                </PrivateRoute>
              }
            />
            <Route
              path='/signup'
              element={
                <PrivateRoute loginPage={true}>
                  <Signup />
                </PrivateRoute>
              }
            />
          </Routes>
        
      </AuthContextProvider>

    
  );
}
