import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  //INSERT CONFIG HERE
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //Commented until authentication works...
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log("userRef", userRef);

  // const userRef = firestore.doc('users/9HGkgUwVRtItcoF3jC8T');

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).then(test => console.log("test ===>", test));

export default firebase;
