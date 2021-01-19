import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyChImuiPmBEbGlEgzs1m818B5m4LpKYbCo",
  authDomain: "crwn-clothing-db91f.firebaseapp.com",
  projectId: "crwn-clothing-db91f",
  storageBucket: "crwn-clothing-db91f.appspot.com",
  messagingSenderId: "12724150829",
  appId: "1:12724150829:web:0d0a75449968d175674ea4",
  measurementId: "G-DPNJKXLG0N"

  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;