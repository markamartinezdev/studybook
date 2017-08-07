import * as firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCwsl4qdsUKUA3pWlAV6xiL14_d3aU9_90",
    authDomain: "studybooktest.firebaseapp.com",
    databaseURL: "https://studybooktest.firebaseio.com",
    projectId: "studybooktest",
    storageBucket: "studybooktest.appspot.com",
    messagingSenderId: "801938444718"
};
firebase.initializeApp(config);
const database = firebase.database();
let PostsArray = database.ref();
var posts;
PostsArray.once("value", function(snapshot) {
    posts = snapshot.val().posts;
    export default posts;
});
