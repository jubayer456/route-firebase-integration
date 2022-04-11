import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init'
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                const user = res.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [])
    const handelSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    return { user, setUser, signInGoogle, handelSignOut };
};

export default useFirebase;