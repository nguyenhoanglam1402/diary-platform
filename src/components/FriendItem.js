import React from "react";
import "../App.css";

const FriendItemComponent = ({img, name, novel}) => {
    return (
        <div className="friend-item-block">
            <div>
                <img className="friend-avatar" src={img} alt="..." />
            </div>
            <div className="friend-detail">
                <span className="friend-name">{name}</span>
                <span className="status">Reading [<b> {novel} </b>]</span>
            </div>
        </div>
    );
}

export default FriendItemComponent;