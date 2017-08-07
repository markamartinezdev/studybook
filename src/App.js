import React, { Component } from 'react';
import MainUserContainer from './components/MainUserContainer.js';
import Posts from './components/Posts.js';
import PostForm from './components/PostForm.js';

import './app.css';
class App extends Component {
  render() {
    return (
        <div className="mainContainer">
            <MainUserContainer/>
            <Posts/>
            <PostForm/>
        </div>
    );
  }
}
export default App;
