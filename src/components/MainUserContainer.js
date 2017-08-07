import React from 'react';
import Friends from './Friends.js';
import Friend from './Friend.js';
let User = {userName:'mark',image:'image.png',logInStat:'Login'};

let MainUserContainer = React.createClass({

    createfriend: function (friend) {
        return <Friend source={friend} key={friend.userName} />;
    },

    createfriends: function (friends) {
        return friends.map(this.createfriend);
    },

    render: function () {
        return <div className="container MainUserContainer">
            <div className="userNav header">
                <img src="" alt="StudyBook" className="logo"/>
            </div>
            <div className="userContent">
                <div className="friend">
                    <img className="userImage" src='./images/placeholderuser.png'/>
                    <h3 className="userName">{User.userName}</h3>
                </div>
                <button className="newPostButton">New Post</button>
            </div>
            <Friends/>
        </div>;
    }
});

export default MainUserContainer;