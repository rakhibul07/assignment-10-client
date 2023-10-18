import  { createContext, useEffect, useState} from 'react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged} from "firebase/auth";
import auth from '../../firebase/firebase.config';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    
    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //create user
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login user
    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //update profile
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: photo
        })
    }
        
    // sign out user
    const logOut = () => {
        return signOut(auth)
    }

    //observer
     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
    setLoading(false)
       });
        return () => {
            unSubscribe()
        }
    }, [])

   

    //authentication
    const authentication = {
        user,
        loading,
        googleLogin,
        createUser,
        login,
        handleUpdateProfile,
        logOut
        
    }


    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;