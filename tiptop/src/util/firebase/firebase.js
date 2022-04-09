import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";

//firestore methods
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6VLwgt56QbOBloCpiX1YC5u4XLNWLCwg",
  authDomain: "tiptop-db.firebaseapp.com",
  projectId: "tiptop-db",
  storageBucket: "tiptop-db.appspot.com",
  messagingSenderId: "790811984713",
  appId: "1:790811984713:web:356592becff44b36961098",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//initialize  google auth provider class, and setting up configs
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//create instance of Auth and signinwithgoogle
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

//firestore set up
export const database = getFirestore();

//store user data into firestore (auth)
export const createUserDocFromAuth = async (userAuth, { displayName }) => {
  //check if there's existing user doc
  const userDocRef = doc(database, "users", userAuth.uid);

  console.log(userDocRef, "user doc reference");

  //now check if theres data pertaining to this document reference
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot, " user snap shop");
  console.log(userSnapshot.exists(), "user snapshop exists");

  // no user exists, create a new document
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...displayName,
      });
    } catch (error) {
      console.log("error creating new user doc", error);
    }
  }

  //if user exists,
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(database, collectionKey);
  const batch = writeBatch(database);

  objectsToAdd.forEach((itemTypeObj) => {
    const docRef = doc(collectionRef, itemTypeObj.department.toLowerCase());
    batch.set(docRef, itemTypeObj);
  });

  await batch.commit();
  console.log("successful batch ");
};
