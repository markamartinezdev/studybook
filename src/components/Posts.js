import React from 'react';
import Post from './Post.js'
//import PostsArray from '../database.json';
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
let postsArray = database.ref('/posts');
let PostsArray = [];
postsArray.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        PostsArray.push(item);
    });
});
console.log(PostsArray);
let Posts = React.createClass({

    createpost: function (post) {
        return <Post source={post} key={post.postId}/>;
    },

    createposts: function (posts) {
        return posts.map(this.createpost);
    },

    render: function () {
        const database = firebase.database();
        let postsArray = database.ref('/posts');
        let PostsArray = [];
        postsArray.on("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                let item = childSnapshot.val();
                item.key = childSnapshot.key;
                PostsArray.push(item);
            });
        });
        console.log(PostsArray);
        return(
            <div className="container postsContainer">
                <div className="PostNav header">
                    <select className="classSelect">
                        <option value="math">Math</option>
                        <option value="beer">Beer</option>
                        <option value="wings">Wings</option>
                        <option value="cool">Cool</option>
                    </select>
                </div>
                <div className="posts">
                    {this.createposts(PostsArray)}
                </div>
            </div>
            );
    }
});

export default Posts;