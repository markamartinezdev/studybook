import React from 'react';
import Friend from './Friend.js';
import friendsArray from '../database.json';


let Friends = React.createClass({

    createfriend: function (friend) {
        return <Friend source={friend} key={friend.userName} />;
    },

    createfriends: function (friends) {
        return friends.map(this.createfriend);
    },

    render: function () {
        return <div className="container friendsContainer">
            <div className="friendsHeader header">
                <h2>Class mates</h2>
            </div>
            <div className="friends">
                {this.createfriends(friendsArray.friends)}
            </div>
        </div>;
    }
});

export default Friends;

