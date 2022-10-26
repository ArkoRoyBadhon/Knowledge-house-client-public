import React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }


    const authInfo = {
        createUser,
        logIn,
        user,
        setUser,
        logOut,
        loading,
        setLoading,
        updateUserProfile,
        verifyEmail,
        createUserWithGoogle,
    };

    useEffect(()=> {
        const unsubscribe =  onAuthStateChanged(auth, (currentuser) => {
            // if( currentuser.emailVerified) {
            //     setUser(currentuser);
            // }
            console.log(currentuser);
            if(currentuser?.emailVerified) {
                setUser(currentuser);
            }
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