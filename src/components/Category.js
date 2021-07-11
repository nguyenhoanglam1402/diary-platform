import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const CategoryItemComponent = ({ novelOrder, novelName,
    author, category, releasedDate }) => {
    const iconColor = [
        {
            color: '#ffd400',
        },
        {
            color: '#d2d2d2',
        },
        {
            color: '#ff8d00',
        },
        {
            color: '#00adff',
        },
                {
            color: '#9100ff',
        },
    ];
    return (
        <div className="catergory-item-block">
            <div>
                <FontAwesomeIcon icon={faTrophy} style={(novelOrder < 5)? iconColor[novelOrder-1]: iconColor[4]}/>
            </div>
            <div className="trending-novel-detail">
                <span className="novel-name">{novelName}</span>
                <span className="status">Author: {author}</span>
                <span className="status">Category: {category}</span>  
            </div>
        </div>
    );
};

export default CategoryItemComponent;