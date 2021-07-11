import React from "react";
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight, faHeart } from "@fortawesome/free-solid-svg-icons";

function ProfileBlock({ name, nickname, imgSrc, age, job, description }) {
    const othername = (nickname !== '' && nickname != null) ? nickname : 'Author';
    return (
        <div className="profile-panel">
            <div className="profile-name-block">
                <div className="avatar-block">
                    <img className="avatar" src={imgSrc} alt="Avatar is not availabled" />
                </div>
                <h1 className="user-name">{name}</h1>
                <div>
                    <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft}/>
                    <span className="nickname decription">{othername}</span>
                    <FontAwesomeIcon className="quote-icon" icon={faQuoteRight}/>
                </div>
                <span className="infor-detail age-tag" style={{ fontSize: '1.3em' }}>{age}</span>
                <span className="infor-detail">{job}</span>
                <span className="infor-detail decription">{description}</span>
                <div className="interactive-block">
                    <button className="inter-button">
                        <FontAwesomeIcon className="button-icon" icon={faHeart} />
                        0
                    </button>
                </div>
            </div>
        </div>

    );
}

export default ProfileBlock;