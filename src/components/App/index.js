import React from 'react';
import Friend from './Friend.js';
let friendsArray = {friends:[1,2,3]};

let Friends = React.createClass({

    createfriend: function (friend) {
        return <Friend source={friend} key={friend} />;
    },

    createfriends: function (friends) {
        return friends.map(this.createfriend);
    },

    render: function () {
        return (
            <div className="container">
              <div className="row">
                <div className="col-sm-12 text-center">

                    {this.createfriends(friendsArray.friends)}

                </div>
              </div>
            </div>
        );
    }
});

export default Friends;