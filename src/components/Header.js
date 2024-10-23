import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SignInSignUp from './SignInSignUp'; // Import the updated SignInSignUp component
import './Header.css'; // Importing Header CSS

const Header = () => {
  const [openSignIn, setOpenSignIn] = useState(false); // State to manage SignIn/SignUp dialog

  const handleSignInOpen = () => {
    setOpenSignIn(true); // Open SignIn/SignUp dialog
  };

  const handleSignInClose = () => {
    setOpenSignIn(false); // Close SignIn/SignUp dialog
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
          <SignInSignUp onClose={handleSignInClose} />
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
