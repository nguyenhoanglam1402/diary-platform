import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import "../App.css"
import FriendItemComponent from "./FriendItem";

function ReaderListBlock() {
    const [listOfFriend] = useState([
        {
            name: "Vũ Thị Tuyết Mai",
            age: 19,
            img_src: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/67283628_476106689830851_5800626922664755200_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=XcxDt4twGCgAX--nFqi&_nc_ht=scontent-hkt1-1.xx&oh=6c10d35b15e79024703c0f2d5ec224cd&oe=60E7F880",
            novel: "Mùa thu của tôi - July"
        },
        {
            name: "Đặng Tú Trinh",
            age: 21,
            img_src: "https://scr.vn/wp-content/uploads/2020/07/Avt-%C4%91%E1%BA%B9p-cho-n%E1%BB%AF-1.jpg",
            novel: "Con mèo dạy hải âu bay - Luis Sepúlveda"
        },
        {
            name: "Đoạt Hồn",
            age: 19,
            img_src: "https://lazi.vn/uploads/photo/1611470968_lazi_109748.jpg",
            novel: "Bà nội cha mày - Thành Thiên"
        },
        {
            name: "Nguyễn Ngọc Thành",
            age: 21,
            img_src: "https://lazi.vn/uploads/photo/lazi_5eff038108942_1593770881_43.jpg",
            novel: "Bà nội cha mày - Thành Thiên"
        },
        {
            name: "Phạm Trung Nam",
            age: 19,
            img_src: "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.18169-9/12524137_444535105756695_1265645156887286315_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=iEP785m_UKkAX8_YiVF&_nc_ht=scontent-hkt1-1.xx&oh=db6b98ae8938eb151cb4dae1a6b5e0ac&oe=60E6F673",
            novel: "Tôi là ai? - Ngọc Thành"
        },
        {
            name: "Huấn Rose",
            age: 19,
            img_src: "https://tapchianhdep.com/wp-content/uploads/2021/05/anh-dai-dien-dep.jpg",
            novel: "Ở phía cuối chân trời - Hoàng Lâm"
        },

    ]);
    var numberOfMember = listOfFriend.length;
    return (
        <div className="reader-panel">
            <div className="reader-list">
                <div className="block-title">
                    <div>
                        <FontAwesomeIcon icon={faUserFriends} />
                    </div>
                    <div className="text-detail-title">
                        <span className="title-block-span">People who is reading with you</span>
                        <span className="detail-block-title">{numberOfMember} {(numberOfMember < 2) ? "people is": "peoples are"} reading with you</span>
                    </div>
                </div>
                <div className="content-list-friend">
                    {
                        listOfFriend.map(friend  => (
                            <FriendItemComponent img={friend.img_src} name={friend.name} novel={friend.novel}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ReaderListBlock;