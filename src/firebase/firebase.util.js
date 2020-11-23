import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDWO0LNebW_cfXn8SDKmKQN-2_eD3AVPT8",
    authDomain: "react-auth-test-92361.firebaseapp.com",
    databaseURL: "https://react-auth-test-92361.firebaseio.com",
    projectId: "react-auth-test-92361",
    storageBucket: "react-auth-test-92361.appspot.com",
    messagingSenderId: "933986394650",
    appId: "1:933986394650:web:5ddf78efb51c8d5783a7a3"
  };


firebase.initializeApp(firebaseConfig)

const _auth = firebase.auth();
const _firestore = firebase.firestore();

export const createUserDocument = async (userAuth, otherDetails) => {

    if(!userAuth) return;


    const {uid} = userAuth;
    console.log(uid);

    const userRef = _firestore.doc(`users/${uid}`);
    try{

        const snapShot = await userRef.get();
        console.log(userRef);
        console.log(snapShot);
        if(!snapShot.exists){
            const {displayName, email} = userAuth;
            const createdAt = new Date();
            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...otherDetails
    
                })

                console.log("user account created");
            }
            catch(error){
                console.error(error.code, error.message);
                throw error;
            }

            
            
        }

    }
    catch(error){
        console.error(error.code, error.message);
        throw error;
    }
    

    return userRef;

}



var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

export const signInWithGoogle = ( )=> _auth.signInWithPopup(provider)

export const auth = _auth;
export const firestore = _firestore