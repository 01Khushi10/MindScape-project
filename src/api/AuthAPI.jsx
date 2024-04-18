import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../FirebaseConfig';



export const LoginAPI = (email, password) => {
    try{
       let response = signInWithEmailAndPassword(auth, email, password); 
       return response;
    } 
    catch (error) {
        return error;
    }
};
export const RegisterAPI = (email, password) => {
    try{
       let response = createUserWithEmailAndPassword(auth, email, password); 
       return response;
    } 
    catch (error) {
        return error;
    }
};
export const GoogleSignInAPI = () => {
    try{
       let googleProvider = new GoogleAuthProvider();
       let res = signInWithEmailAndPassword(auth, googleProvider);
       return res;
    } 
    catch (error) {
        return error;
    }
};

export const onLogout = () => {
    try{
        signOut(auth)
     } 
     catch (error) {
         return error;
     }

}