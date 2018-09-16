import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCcNjkjB3mhtGcvFARp9aMIpBiDUVZEILY",
    authDomain: "gainsfordays-8ccd2.firebaseapp.com",
    databaseURL: "https://gainsfordays-8ccd2.firebaseio.com",
    projectId: "gainsfordays-8ccd2",
    storageBucket: "gainsfordays-8ccd2.appspot.com",
    messagingSenderId: "739363374639"
  };
const fire = firebase.initializeApp(config);

export default fire;