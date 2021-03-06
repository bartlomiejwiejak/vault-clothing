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

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData
      })
    } catch (error) {
      console.log('Error while creating user', error.message)
    }
  }

  return userRef;
}
export const addCollectionsAndDocuments = async (collectionName, documentsToAdd) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();
  documentsToAdd.forEach(doc => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, doc)
  })
  return await batch.commit()
}
export const convertCollectionsSnapshotToMap = async (snapshot) => {
  let collections = {};
  for (let snapshotDoc of snapshot.docs) {
    const docData = await snapshotDoc.data();
    collections = {
      ...collections,
      [docData.title.toLowerCase()]: {
        id: snapshotDoc.id,
        title: docData.title,
        items: docData.items
      }
    }
  }
  return collections;
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase;