import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//firestore methods
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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
export const createUserDocFromAuth = async (userAuth, displayName) => {
  //check if there's existing user doc
  const userDocRef = doc(database, "users", userAuth.uid);

  console.log(userDocRef, "user doc reference");

  //now check if theres data pertaining to this document reference
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot, " user snap shop");
  console.log(userSnapshot.exists(), "user snapshop exists");

  // no user exists, create a new document
  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName: displayName,
        email,
        createdAt,
        userId: userAuth.uid,
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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
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

export const getShopAndDocuments = async () => {
  //remember, shop collection is an array of Documents representing categories (phone, hats, shoes, etc)
  const collectionRef = collection(database, "shop");

  //generate an object to get a snapshop of
  const q = query(collectionRef);
  const querySnapshop = await getDocs(q);

  // reduce array of document's which represents diff categories
  const categoryMap = querySnapshop.docs.reduce((acc, docSnapshop) => {
    const { department, items } = docSnapshop.data();
    acc[department.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

//create cart document
export const createUserCart = async (userAuth) => {
  //check if there's existing user cart
  const cartDocRef = doc(database, "carts", userAuth.uid);

  console.log(cartDocRef, "cart doc reference");

  //now check if theres data pertaining to this document reference
  const cartSnapshot = await getDoc(cartDocRef);
  console.log(cartSnapshot, " user snap shop");
  console.log(cartSnapshot.exists(), "cart snapshot exists");

  // no cart exists, create a new document
  if (!cartSnapshot.exists()) {
    try {
      await setDoc(cartDocRef, {
        userId: userAuth.uid,
        cartCount: 0,
        cartItems: [],
        cartTotal: 0,
      });
    } catch (error) {
      console.log("error creating new cart doc", error);
    }
  }

  //if cart exists,
  console.log(cartDocRef, "cartDocRef success");
  return cartDocRef;
};

export const getCartDoc = async (userAuth) => {
  const collectionRef = collection(database, "carts");

  //generate an object to get a snapshop of
  const q = query(collectionRef);
  const querySnapshop = await getDocs(q);

  console.log(querySnapshop, "SNAP SHOP QUERARTY SDF");

  // iterate over carts and find mathcing uid
  const cart = querySnapshop.docs.find((cartDoc) => {
    return cartDoc.data().userId === userAuth.uid;
  });

  console.log(cart.data(), "cart found");
  return cart.data();
};

export const getUserDoc = async (userAuth) => {
  const collectionRef = collection(database, "users");

  //generate an object to get a snapshop of
  const q = query(collectionRef);
  const querySnapshop = await getDocs(q);

  console.log(querySnapshop, "SNAP shot users QUERARTY SDF");

  // iterate over carts and find mathcing uid
  const cart = querySnapshop.docs.find((userDoc) => {
    return userDoc.data().userId === userAuth.uid;
  });

  console.log(cart.data(), "user found");
  return cart.data();
};
