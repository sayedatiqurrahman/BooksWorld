import { getAuth, onAuthStateChanged, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const auth = getAuth();

    const [user, setUser] = useState()
    const [extraLoader, setExtraLoader] = useState(true)


    const google = () => {

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setExtraLoader(false)
        });
        return () => {
            return unsubscribe()
        }
    }, [])




    const allInfo = {
        extraLoader,
        auth,
        user,
        children
    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;