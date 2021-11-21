import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Initialize firebase app
const firebaseConfig = {
  apiKey: "AIzaSyDsTaZhiN7O9i95YNje9EuIMR44BfpMqng",
  authDomain: "bookshelves-9cbe3.firebaseapp.com",
  projectId: "bookshelves-9cbe3",
  storageBucket: "bookshelves-9cbe3.appspot.com",
  messagingSenderId: "752841097745",
  appId: "1:752841097745:web:8313618cf53617456727b0",
  measurementId: "G-NYXP6M7MY9",
};
initializeApp(firebaseConfig);

export async function authenticateUser() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("token: ", token);
    console.log("user: ", user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("errorMessage: ", errorMessage);
    console.log("error code: ", errorCode);
    console.log("email: ", email);
    console.log("credential: ", credential);
    return undefined;
  }
}
