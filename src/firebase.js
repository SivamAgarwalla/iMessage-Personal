import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCei9T4MsLVqNEakFeWI3AsFlWj6kSMxBc',
  authDomain: 'imessage-personal.firebaseapp.com',
  projectId: 'imessage-personal',
  storageBucket: 'imessage-personal.appspot.com',
  messagingSenderId: '399772565047',
  appId: '1:399772565047:web:e6fc945b88ea9da422c9b2',
  measurementId: 'G-PQHEPQNRD3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
