import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBXtkvrzzdd34RqrwGldgTIVqkY2-TUbMU",
    authDomain: "newman-todo-app.firebaseapp.com",
    databaseURL: "https://newman-todo-app.firebaseio.com",
    storageBucket: "newman-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {
  connsole.log("firebase didn't work", e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
