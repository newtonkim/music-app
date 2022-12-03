import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
    apiKey: "AIzaSyCSumUfaSSUUxG57R47ncV-tuwbwemd3Wc",
    authDomain: "muziki-2022.firebaseapp.com",
    projectId: "muziki-2022",
    storageBucket: "muziki-2022.appspot.com",
    messagingSenderId: "1019270730338",
    appId: "1:1019270730338:web:8d4720dde33f965d22373b",
    measurementId: "G-8Q6VR915W7"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
//reference
const auth = firebase.auth();
const db = firebase.firestore();


// users information categorized in a collection

const usersCollection = db.collection('users');

//named exports
export { auth, usersCollection };