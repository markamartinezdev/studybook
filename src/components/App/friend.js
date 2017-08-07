
import React from 'react';

let friend = function statelessFunctionComponentClass(props) {
    let imageSource = './images/' + props.source;
    let name = props.name;

    return (
        <div className="friend">
            <img className="userImage" src={imageSource}/>
            <h3 className="userName">{name}</h3>
        </div>
    );
};

export default friend;