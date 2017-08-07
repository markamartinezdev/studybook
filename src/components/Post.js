import React from 'react';
import Chat from './Chat.js';

let Post = function statelessFunctionComponentClass(props) {
    let postId = props.source.postId;
    let poster = props.source.poster;
    let post = props.source.post;


    return (
        <div className="post animated slideUp" data-postid={postId}>
            <div className="postContent">
                <img className="userImage" src=''/>
                <h3 className="userName">{poster}</h3>
                <p className="postText">{post}</p>
            </div>
            <Chat source={props.source.Chat}/>
        </div>
    );
};

export default Post;