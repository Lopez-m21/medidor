var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {

  apiKey: "AIzaSyBuOE4Z7QFu5GN_hYPHSosG_V8gDoPXwoI",
  authDomain: "medidordeagua-f00de.firebaseapp.com",
  databaseURL: "https://medidordeagua-f00de-default-rtdb.firebaseio.com",
  projectId: "medidordeagua-f00de",
  storageBucket: "medidordeagua-f00de.appspot.com",
  messagingSenderId: "693057292616",
  appId: "1:693057292616:web:4d981c2a700edeb1474b7d",
  measurementId: "G-QBKFMKPY1L"
};
const fire = firebase.initializeApp(config);
module.exports = fire;