import { useState } from "react";
import { auth } from "../config/firebase"; // Make sure your Firebase config is set up
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User created successfully!");
            onClose(); // Close the dialog on successful sign-up
        } catch (error) {
            setError("Error creating user: " + error.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SignUp;
