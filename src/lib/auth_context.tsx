import { createContext, useContext } from "react";
import { auth } from "./firebase"
import { onAuthStateChanged, User } from "firebase/auth";

const AuthContext = createContext(null);

export function AuthState({ children }) {

    let currentUser: User | null = null;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            currentUser = user;
        } else {
            currentUser = null;
        }
    })

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);