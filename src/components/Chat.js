

import React from 'react';

let Post = function statelessFunctionComponentClass(props) {
    return (
        <div className="chatContainer">
            <div className="chatMessages">
                {props.source.map( chat => {
                    return( <p className="chatMessage"><span className="chatUser">{chat.poster}</span> {chat.text}</p>);
                })}
            </div>
            <div className="message">
                <input className="text"/>
                <button className="send">Send</button>
            </div>
        </div>
    );
};

export default Post;