import firebase from "firebase";

// should go in a secret file
const config = {
  apiKey: "Your API Key",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app-database.firebaseio.com",
  storageBucket: "your-app.appspot.com",
};
const firebaseRef = firebase.initializeApp(config);

export default firebaseRef;
