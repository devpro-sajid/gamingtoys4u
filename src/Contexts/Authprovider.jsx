import React, { createContext, useEffect, useState } from 'react';
import  app from '../Utils/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile} from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);
    const createUser=(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUser=(userName,photoUrl)=>{
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL:photoUrl
          })
    }
    const loginUser=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogIn=()=>{
       return signInWithPopup(auth, GoogleProvider)
     }
    const logOut=()=>{
       setLoader(true)
      return signOut(auth)

    }
    useEffect(() => {
        // fetch('https://french-food-server-devpro-sajid.vercel.app/chefs')
        //     .then(res => res.json())
        //     .then(data => setChefs(data))
    }, [])
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoader(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        loader,
        googleLogIn,
        updateUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;