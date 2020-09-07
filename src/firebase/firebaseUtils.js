import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBVHCCNHTszOq89vEZ0PHBiALLMKlJb7Tw",
  authDomain: "e-comm-81af8.firebaseapp.com",
  databaseURL: "https://e-comm-81af8.firebaseio.com",
  projectId: "e-comm-81af8",
  storageBucket: "e-comm-81af8.appspot.com",
  messagingSenderId: "659050412016",
  appId: "1:659050412016:web:a5410ddb551630fef3cf35",
  measurementId: "G-BPW1LPBGC3"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;