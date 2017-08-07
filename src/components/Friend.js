import React from 'react';

let friend = function statelessFunctionComponentClass(props) {
    let imageSource = './images/placeholderuser.png';
    let name = props.source.userName;

    return (
        <div className="friend">
            <img className="userImage" src={imageSource}/>
            <h3 className="userName">{name}</h3>
        </div>
    );
};

export default friend;