import React from 'react';
import './App.css';
import ProfileBlock from './component/Profile';
import image from './image/example.png'
import NavBar from "./component/Nav";
import ReaderListBlock from "./component/ReadersList";
import PostItemComponent from "./component/PostItem";


function App() {
  return (
    <div className="body">
      <NavBar/>
      <div className="App">
        <div className="extra-content-area">
          <ReaderListBlock/>
        </div>
        <div className="main-content">
          <PostItemComponent
            novel="Tiếng thở dài"
            releasedDate="July 5th, 2021"/>
        </div>
        <div className="profile-area">
          <ProfileBlock
            name="Nguyen Hoang Lam"
            imgSrc={image}
            nickname='The Little Sadness'
            age="21"
            job="Front-end/Mobile Developer"
            description="Hello there! My name is Nguyen Hoang Lam,
            you can also call me Lam Emilie. I'm a shy person and
            extremely passionate about web technology, mobile and
            games."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
