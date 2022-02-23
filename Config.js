import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
  apiKey: "AIzaSyD8IrURMJaFsMUjhDBETP6u1mEYWailaGc",
  authDomain: "reactnative-52e76.firebaseapp.com",
  projectId: "reactnative-52e76",
  storageBucket: "reactnative-52e76.appspot.com",
  messagingSenderId: "912910855764",
  appId: "1:912910855764:web:1062bb0ecb32f4662f07c1"
};

// Initialize Firebase


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



let auth = firebase.auth();
let db = firebase.firestore()

export { db, auth }