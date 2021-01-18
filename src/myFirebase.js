import firebase from "firebase";

// This contains unique but non-secret info, see https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize
const firebaseConfig = {
  apiKey: "AIzaSyCnrwtMm73oK-SIZMqThGb-B2v35_Y6Qss",
  authDomain: "soki-300523.firebaseapp.com",
  projectId: "soki-300523",
  storageBucket: "soki-300523.appspot.com",
  messagingSenderId: "680424354121",
  appId: "1:680424354121:web:aadd24ea62cf23dab9aa98",
  measurementId: "G-8W9C8LDZLQ",
};

let myFirebaseVal = null;

export default function myFirebase() {
  if (myFirebaseVal != null) {
    return myFirebaseVal;
  }

  if (!firebase.apps.length) {
    myFirebaseVal = firebase.initializeApp(firebaseConfig);
    // Call this during initialization so default events are sent successfully.
    myFirebaseVal.analytics();
  } else {
    myFirebaseVal = firebase.app();
  }

  return myFirebaseVal;
}
