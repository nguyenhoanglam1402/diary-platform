import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark,faPaperPlane, faTag, faIdBadge, faBell } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
    return (
        <div className="navbar">
            <span className="brand-name">
                <p className="brand-logo">Brand Name</p> 
            </span>
            <ul className="nav-list">
                <li className="nav-item">
                    <FontAwesomeIcon icon={ faBookmark} className="nav-icon"/>
                    Home
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faTag} className="nav-icon"/>
                    Category
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faPaperPlane} className="nav-icon"/>
                    Contact
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faIdBadge} className="nav-icon"/>
                    About me
                </li>
            </ul>
            <span className="search-box-area">
                <div className="input-searchbox-area">
                    <input type="search" name="searchBox"
                        id="search-box" placeholder="Tìm kiếm trên Qiu Diary" />
                    <button className="notification-btn">
                        <FontAwesomeIcon className="nav-icon btn" icon={faBell}/>
                    </button>
                </div>
            </span>
        </div>
    );
}

export default NavBar;