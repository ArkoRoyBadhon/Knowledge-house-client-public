import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        createUser,
        logIn,
        user,
        setUser,
        logOut,
        setLoading,
    };

    useEffect(()=> {
        const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
            // if(currentuser === null || currentuser.emailVerified) {
            //     setUser(currentuser);
            // }
            setUser(currentuser);
            setLoading(false);
        })
        return () => unsubscribe();
    },[])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;