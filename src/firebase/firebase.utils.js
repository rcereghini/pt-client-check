import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBbBE-G2_JSQgxfruNuVvrmTcvrBdFbHXc",
  authDomain: "pt-client-check.firebaseapp.com",
  databaseURL: "https://pt-client-check.firebaseio.com",
  projectId: "pt-client-check",
  storageBucket: "pt-client-check.appspot.com",
  messagingSenderId: "252176957995",
  appId: "1:252176957995:web:fbdbe5004eec11b0caa06e",
  measurementId: "G-ETEN6NDN7W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log("userRef", userRef);

  if (!snapShot.exists) {
    const { uid, displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        uid,
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).then(test => console.log("test ===>", test));

export default firebase;
