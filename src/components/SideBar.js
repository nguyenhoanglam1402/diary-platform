import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const SideBarComponent = ({ component }) => {
    const style = {
        color: "rgba(255, 255, 255, 0.699);"
    }
    return (
        <div className="sidebar-extra-content">
            <div className="side-bar-wrap">
                {component}
            </div>
            <div className="copyright">
                <p>
                    Qiu-Story © Copyright 2021 - Qiu Qiu Community Product
                </p>
                <ul>
                    <Link style={style}>
                        <li>
                            Policies
                        </li>
                    </Link>
                    <Link style={style}>
                        <li>
                            Advertisement
                        </li>
                    </Link>
                    <Link style={style}>
                        <li>
                            Cookie
                        </li>
                    </Link>
                    <Link style={style}>
                        <li>
                            Rules
                        </li>
                    </Link>
                    <Link style={style}>
                        <li>
                            About the developer
                        </li>
                    </Link>
                </ul>
            </div>
                
        </div>
    );
};

export default SideBarComponent;