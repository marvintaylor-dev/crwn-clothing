import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwahym3Lae2D3_rEUbPJDG7bECAneQ-7k",
    authDomain: "crwn-db-f72da.firebaseapp.com",
    projectId: "crwn-db-f72da",
    storageBucket: "crwn-db-f72da.appspot.com",
    messagingSenderId: "1055460799651",
    appId: "1:1055460799651:web:6dccc15abbb13c02efbb16"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;