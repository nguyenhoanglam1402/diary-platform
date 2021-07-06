import React from "react";
import "../App.css";
import image from "../image/default_pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const PostItemComponent = (props) => {
    return (
        <div className="post-item">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script"/>
            <div>
                <img className="cover-img" src={image} alt=".." />
            </div>
            <div className="post-content">
                <div className="post-title">
                    <div>
                        <h1 className="novel-title">{props.novel}</h1>
                    </div>
                    <div>
                        <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft}/>
                        <span className="nickname decription">{props.releasedDate}</span>
                        <FontAwesomeIcon className="quote-icon" icon={faQuoteRight}/>
                    </div>
                </div>
                <div className="post-content-para">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PostItemComponent;