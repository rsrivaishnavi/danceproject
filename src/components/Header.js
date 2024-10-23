import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SignInSignUp from './SignInSignUp'; 
import './Header.css'; 

const Header = () => {
  const [openSignIn, setOpenSignIn] = useState(false); // State to manage SignIn/SignUp dialog
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignInOpen = () => {
    setOpenSignIn(true); 
  };

  const handleSignInClose = () => {
    setOpenSignIn(false); 
  };

  return (
    <header className="header">
      <h1 style={{color:"maroon"}}>NrityaConnect</h1>
      <nav>
        <ul>
          <li>
            <Link to="#about">About Us</Link>
          </li>
          <li>
            <Link to="#contact">Contact Us</Link>
          </li>
          <li>
            <Button 
              className="login-button"
              onClick={handleSignInOpen}
              sx={{
                backgroundColor: 'maroon',
                color: 'white',
                width: '150px',
                height: '50px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#a52a2a',
                },
              }}
            >
              Get Started
            </Button>
          </li>
        </ul>
      </nav>

      {/* Sign In/Sign Up Dialog */}
      <Dialog open={openSignIn} onClose={handleSignInClose}>
        <DialogTitle>Sign In / Sign Up</DialogTitle>
        <DialogContent>
          {/* Pass navigate to SignInSignUp */}
          <SignInSignUp onClose={handleSignInClose} navigate={navigate} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignInClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </header>
  );
};

export default Header;
