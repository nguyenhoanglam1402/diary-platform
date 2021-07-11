import React from "react";
import '../App.css';
import ProfileBlock from '../components/Profile';
import image from '../image/example.png'
import ReaderListBlock from "../components/ReadersList";
import PostItemComponent from "../components/PostItem";
import SideBarComponent from "../components/SideBar";

function HomePageComponent() {
    return (
        <div className="App">
            <div className="extra-content-area">
                <SideBarComponent component={<ReaderListBlock/>}/>
            </div>
            <div className="main-content">
                <div className="container">
                    <PostItemComponent
                        novel="Tiếng thở dài"
                        releasedDate="July 5th, 2021"/>
                </div>
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
                    games."/>
            </div>
        </div>
    );
}

export default HomePageComponent;