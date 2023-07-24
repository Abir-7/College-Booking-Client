import app from '../../FireBaseConfig/FireBaseConfig'

import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth"

const auth = getAuth(app);
export const Authcontext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    //////////Create User////////
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    ///////////Update Name////////

    const updateUserProfile = (name, photourl) => {

        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL: `${photourl}`
        })
    }
    ////////update user email////
    const updateUserEmail=(email)=>{
        return updateEmail(auth.currentUser, email)
    }

    ///////////loginUser/////////
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    /////////google login//////
    const g_provider = new GoogleAuthProvider();
    const googleSignin = () => {
        setLoader(true)
        return signInWithPopup(auth, g_provider)
    }

    ////////////logOut////////////
    const logoutUser = () => {
        setLoader(true)
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    ///////////////Observer//////////////
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (loguser) => {
            setUser(loguser);
            setLoader(false)
        });

        return () => { unsubcribe() };
    }, [])



    const authinfo = {
        user,
        loader,
        createUser,
        loginUser,
        logoutUser,
        updateUserProfile,
        updateUserEmail,
        googleSignin,

    };

    return (
        <Authcontext.Provider value={authinfo}>
            <>
                {children}
            </>
        </Authcontext.Provider>
    );
};

export default AuthProvider;