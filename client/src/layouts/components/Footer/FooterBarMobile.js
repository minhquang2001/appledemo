import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

export const SidebarData = [
    {
        id: 1,
        title: 'Sản phẩm',
        iconOpened : <FontAwesomeIcon icon={faSortUp} />,
        iconClosed : <FontAwesomeIcon icon={faSortDown} />,

        subNav: [
            {
                title: 'iPhone',
                path: '/iphone'
            },
            {
                title: 'iPad',
                path: '/ipad'
            },
            {
                title: 'Macbook',
                path: '/mac'
            },
            {
                title: 'Apple Watch',
                path: '/watch'
            },
            {
                title: 'Âm thanh',
                path: '/'
            }
        ]
    },
    {
        id: 2,
        title: 'Thông tin',
        iconOpened : <FontAwesomeIcon icon={faSortUp} />,
        iconClosed : <FontAwesomeIcon icon={faSortDown} />,

        subNav: [
            {
                title: 'Giới thiệu',
                path: '/'
            },
            {
                title: 'Khuyến mãi',
                path: '/'
            },
            {
                title: 'Bảo hành và sửa chữa',
                path: '/'
            },
            {
                title: 'Tuyển dụng',
                path: '/'
            },
            {
                title: 'Tin tức',
                path: '/'
            }
        ]
    },
    {
        id: 3,
        title: 'Chính sách',
        iconOpened : <FontAwesomeIcon icon={faSortUp} />,
        iconClosed : <FontAwesomeIcon icon={faSortDown} />,

        subNav: [
            {
                title: 'Trả góp',
                path: '/'
            },
            {
                title: 'Giao hàng',
                path: '/'
            },
            {
                title: 'Đổi trả',
                path: '/'
            },
            {
                title: 'Bảo hành',
                path: '/'
            },
            {
                title: 'Hủy giao dịch',
                path: '/'
            }
        ]
    },
    {
        id: 4,
        title: 'Liên hệ',
        iconOpened : <FontAwesomeIcon icon={faSortUp} />,
        iconClosed : <FontAwesomeIcon icon={faSortDown} />,

        subNav: [
            {
                title: 'Mua hàng: 113',
                path: '/'
            },
            {
                title: 'Khiếu nại: 114',
                path: '/'
            },
            {
                title: 'Đối tác và Doanh nghiệp: 115',
                path: '/'
            }
        ]
    }
]