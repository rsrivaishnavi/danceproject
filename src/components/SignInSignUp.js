import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { TextField, Button, Box } from "@mui/material";

const SignInSignUp = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false); // Toggle between Sign In and Sign Up
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully!");
      onClose();
    } catch (error) {
      setError("Error signing in: " + error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      onClose();
    } catch (error) {
      setError("Error signing up: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in with Google!");
      onClose();
    } catch (error) {
      setError("Error signing in with Google: " + error.message);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
      }}
    >
      <h2>{isSigningUp ? "Sign Up" : "Sign In"}</h2>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      
      {isSigningUp ? (
        <Button variant="contained" onClick={handleSignUp}>
          Sign Up
        </Button>
      ) : (
        <Button variant="contained" onClick={handleSignIn}>
          Sign In
        </Button>
      )}
      
      <Button variant="outlined" onClick={handleGoogleSignIn}>
        Sign {isSigningUp ? "Up" : "In"} with Google
      </Button>

      <p>
        {isSigningUp ? "Already have an account?" : "New user?"}{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => setIsSigningUp(!isSigningUp)}
        >
          {isSigningUp ? "Sign In" : "Sign Up"}
        </span>
      </p>
    </Box>
  );
};

export default SignInSignUp;
