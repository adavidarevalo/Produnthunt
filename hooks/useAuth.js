
import React, {useState, useEffect} from "react";
import firebase from "../firebase"

function useAuth(){
    const [userAuth, addUserAuth] = useState(null)
    useEffect(()=>{
        const unsuscribe = firebase.auth.onAuthStateChanged(user=>{
            if (user) {
                addUserAuth(user)
            } else {
                addUserAuth(null)
            }
        })
        return () => unsuscribe()
    },[])
    return userAuth;
}

export default useAuth