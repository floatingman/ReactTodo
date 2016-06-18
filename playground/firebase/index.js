import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyBXtkvrzzdd34RqrwGldgTIVqkY2-TUbMU",
  authDomain: "newman-todo-app.firebaseapp.com",
  databaseURL: "https://newman-todo-app.firebaseio.com",
  storageBucket: "newman-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Daniel',
    age: 38
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});


