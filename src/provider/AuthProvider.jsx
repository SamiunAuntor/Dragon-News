import React, { createContext, useState, useEffect } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

const updateUserProfile = (user, name, photoURL) => {
    return updateProfile(user, {
        displayName: name,
        photoURL: photoURL
    });
}

const logOut = () => {
    return signOut(auth);
}

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const userData = {
        user,
        setUser,
        createUser,
        signInUser,
        updateUserProfile,
        logOut,
        loading
    }

    return <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;