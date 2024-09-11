// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATVtKaUe-3RUyzng9j6P1OqmPIR7FQJck",
  authDomain: "jadealers-30c2b.firebaseapp.com",
  projectId: "jadealers-30c2b",
  storageBucket: "jadealers-30c2b.appspot.com",
  messagingSenderId: "231348560681",
  appId: "1:231348560681:web:ee1509f59af883f5ad0d38",
  measurementId: "G-T4GKDZDJN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});
 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalData ={}) =>{
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  //console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  //console.log(userSnapShot);
  //console.log(userSnapShot.exists());
//create a user on firestore
  if(! userSnapShot.exists()){

    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
    return userDocRef;
  }

};
//create with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInUserWithEmailAndPassword = async (email, password) =>{
  
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}
export const onAuthStateChangedListener= (callback) => {
  return onAuthStateChanged(auth, callback);
};
export const signOutUser = async () => {
  const auth = getAuth();
  await signOut(auth);
};
