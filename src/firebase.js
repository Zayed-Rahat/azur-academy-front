import firebase from "firebase/app";
import "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvH2Gf7BZW_KHfSY-3crAss_niyS7mYkM",
  authDomain: "azur-academy.firebaseapp.com",
  databaseURL: "https://azur-academy.firebaseio.com",
  projectId: "azur-academy",
  storageBucket: "azur-academy.appspot.com",
  messagingSenderId: "5305211792",
  appId: "1:5305211792:web:3feabc168cfaf3112e3115"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
