import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../config/firebase'; // Ensure to import your Firebase config

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Get the current user from Firebase

  if (!user) {
    // If no user is authenticated, redirect to the sign-in page
    return <Navigate to="/" />;
  }

  return children; // Render the children (protected component)
};

export default ProtectedRoute;
