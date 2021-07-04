import React from 'react';
import './App.css';
import ProfileBlock from './component/Profile';
import image from './image/example.png'
import NavBar from "./component/Nav";


function App() {
  return (
    <div className="body">
      <NavBar/>
      <div className="App">
        <div className="extra-content-area">
          
        </div>
        <div className="main-content">
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
