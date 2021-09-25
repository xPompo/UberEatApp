import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD9rvgB57LMc_urP3IbBjqQpoulqkmlQfs",
  authDomain: "ubereat-clone-rn.firebaseapp.com",
  projectId: "ubereat-clone-rn",
  storageBucket: "ubereat-clone-rn.appspot.com",
  messagingSenderId: "845954586662",
  appId: "1:845954586662:web:9c8064af4b1b4e3d422ee7",
};

firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

export default firebase;
