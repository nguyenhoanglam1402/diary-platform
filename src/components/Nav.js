import { React } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark,faPaperPlane, faTag, faIdBadge, faBell, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
    const navStyle = {
        color: 'rgba(255, 255, 255, 0.616)',
    };
    return (
        <div className="navbar">
            <span className="brand-name">
                <p className="brand-logo">Qiu Story</p> 
            </span>
            <ul className="nav-list">
                <Link style={navStyle} to="/">
                    <li className="nav-item">
                        <FontAwesomeIcon icon={ faBookmark} className="nav-icon"/>
                        Home
                    </li>
                </Link>
                <Link style={navStyle} to="/">
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faTag} className="nav-icon"/>
                        Category
                    </li>
                </Link>
                <Link style={navStyle} to="/">
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faPaperPlane} className="nav-icon"/>
                        Contact
                    </li>
                </Link>
                <Link style={navStyle} to="/">
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faIdBadge} className="nav-icon"/>
                        About me
                    </li>
                </Link>
            </ul>
            <span className="search-box-area">
                <div className="input-searchbox-area">
                    <input type="search" name="searchBox"
                        id="search-box" placeholder="Tìm kiếm trên Qiu Diary" />
                    <button className="notification-btn">
                        <FontAwesomeIcon className="nav-icon btn" icon={faBell} />
                    </button>
                    <Link style={navStyle} to="/create">
                        <button className="notification-btn">
                            <FontAwesomeIcon className="nav-icon btn" icon={faPencilAlt}/>
                        </button>
                    </Link>
                </div>
            </span>
        </div>
    );
}

export default NavBar;