// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup,
    GoogleAuthProvider,} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
    // Your web app's Firebase configuration
    const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyBdfHu5earZaywkG31virg4VLW4b_WwtwY",
  authDomain: "maglo-dashboard.firebaseapp.com",
  projectId: "maglo-dashboard",
  storageBucket: "maglo-dashboard.appspot.com",
  messagingSenderId: "275615201061",
  appId: "1:275615201061:web:bd901060d682905af44ccc"
};
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider)
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore();
export { app, auth };