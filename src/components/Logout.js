// src/components/Logout.js
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export const Logout = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};
