import React, { useState } from "react";
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import CategoryItemComponent from "./Category";

const TopTrendingComponent = () => {
    var itemOrder = 0;
    const [topTrending] = useState([
        {
            key: 1,
            category: 'Tâm lý',
            novel: 'Hạt nắng của tôi',
            author: 'Hoàng Lâm',
            released: 'July 7th, 2021'
        },
        {
            key: 2,
            category: 'Cảm nhận',
            novel: 'Bà nội cha mày',
            author: 'Thành Thiên',
            released: 'July 5th, 2021'
        },
        {
            key: 3,
            category: 'Tâm lý',
            novel: 'Ngày sửa ống nước may mắn',
            author: 'Ngọc Thành',
            released: 'July 3th, 2021'
        },
        {
            key: 4,
            category: 'Chuyện đời thường',
            novel: 'Anh bệnh nhân may mắn',
            author: 'Trung Nam',
            released: 'July 5th, 2021'
        },
        {
            key: 5,
            category: 'Tâm lý',
            novel: 'Nhớ người yêu cũ',
            author: 'Bùi Thị Minh Nguyệt',
            released: 'July 5th, 2021'
        },
    ]);
    return (
        <div className="top-trending-panel">
            <div className="trending-list">
                <div className="block-title">
                    <div>
                        <FontAwesomeIcon icon={faAward}/>
                    </div>
                    <div className="text-detail-title">
                        <span className="title-block-span">Highlights of the week</span>
                        <span className="detail-block-title">There {(topTrending.length < 2) ? "is": "are"} {topTrending.length} most popular trends</span>
                    </div>
                </div>
                <div className="content-list-trending">
                    {
                        topTrending.map(item => (
                            <CategoryItemComponent
                                novelName={item.novel}
                                category={item.category}
                                author={item.author}
                                novelOrder={itemOrder += 1}
                                key={item.key}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TopTrendingComponent;