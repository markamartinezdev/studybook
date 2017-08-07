import React from 'react';
let PostForm = function statelessFunctionComponentClass(props) {
    return (
        <div className="dialogContainer newPost hide">
            <div className="dialog newPostForm animated bounceIn">
                <textarea className="newPostMessage errorToolTip"></textarea>
                    <div className="postFormbuttons">
                        <select id="classSelect">
                            <option value="math">Math</option>
                            <option value="beer">Beer</option>
                            <option value="wings">Wings</option>
                            <option value="cool">Cool</option>
                        </select>
                        <button className="newPostSubmit">Submit Post</button>
                        <button className="newPostCancel">Cancel</button>
                    </div>
            </div>
        </div>
    );
};

export default PostForm;