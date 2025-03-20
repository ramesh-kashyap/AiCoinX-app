import { jwtDecode } from 'jwt-decode';

import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';


 export const isAuthenticated = () => {
    const token = localStorage.getItem('authToken');
    return !!localStorage.getItem('authToken'); 
};

// Protected Route Component
export const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

export const ProtecRegRoute = ({ children }) => {
    // Check if the user has completed registration (via localStorage or sessionStorage)
    const isRegistered = localStorage.getItem('isRegistered');
    const currentPath = window.location.pathname;
    const allowedPaths = ['/forgot', '/register'];
    const isOnAllowedPath = allowedPaths.includes(currentPath);
  
    // Redirect to /register if user is not registered and not on allowed paths
    if (!isRegistered && !isOnAllowedPath) {
      return <Navigate to="/register" replace />;
    }
  };
// Public Route Component
export const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/enter-pin" /> : children;
};