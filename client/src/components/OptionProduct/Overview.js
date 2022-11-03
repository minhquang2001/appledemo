
import React, { useState } from 'react'
import classNames from 'classnames/bind'

import styles from './OptionProduct.module.scss'

const cx = classNames.bind(styles)

function Overview() {
    const [height, setHeight] = useState(false)
    const handleHeight = () => {
        setHeight(!height)
    }
    return (
        <>
            <div className={cx('wrap-box', `${height ? "active" : ""}`)}>
                <div className={cx('box-information')}>
                    <h4>iPhone 14 Pro vượt trội.</h4>
                    <p>iPhone 14 Pro. Bắt trọn chi tiết ấn tượng với Camera Chính 48MP. Trải nghiệm iPhone theo cách hoàn toàn mới với Dynamic Island và màn hình Luôn Bật. Phát Hiện Va Chạm, một tính năng an toàn mới, thay bạn gọi trợ giúp khi cần kíp.</p>
                </div>
                <div className={cx('box-information')}>
                    <h1>Tính năng nổi bật</h1>
                    <ul>
                        <li>Màn hình Super Retina XDR 6,1 inch với tính năng Luôn Bật và ProMotion</li>
                        <li>Dynamic Island, một cách mới tuyệt diệu để tương tác với iPhone</li>
                        <li>Camera Chính 48MP cho độ phân giải gấp 4 lần</li>
                        <li>Chế độ Điện Ảnh nay đã hỗ trợ 4K Dolby Vision tốc độ lên đến 30 fps</li>
                        <li>Chế độ Hành Động để quay video cầm tay mượt mà, ổn định</li>
                        <li>Công nghệ an toàn quan trọng – Phát Hiện Va Chạm thay bạn gọi trợ giúp khi cần kíp</li>
                        <li>Thời lượng pin cả ngày và thời gian xem video lên đến 23 giờ</li>
                        <li>A16 Bionic, chip điện thoại thông minh tuyệt đỉnh. Mạng di động 5G siêu nhanh</li>
                        <li>Các tính năng về độ bền dẫn đầu như Ceramic Shield và khả năng chống nước</li>
                        <li>iOS 16 đem đến thêm nhiều cách để cá nhân hóa, giao tiếp và chia sẻ</li>
                    </ul>
                </div>
                <div className={cx('box-information')}>
                    <h1>Pháp lý</h1>
                    <ul>
                        <li>SOS Khẩn Cấp sử dụng kết nối mạng di động hoặc Cuộc Gọi Wi-Fi.</li>
                        <li>Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật, kích thước màn hình theo đường chéo là 6,12 inch. Diện tích hiển thị thực tế nhỏ hơn.</li>
                        <li>Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình; truy cập apple.com/batteries để biết thêm thông tin.</li>
                        <li>Cần có gói cước dữ liệu. Mạng 5G chỉ khả dụng ở một số thị trường và được cung cấp qua một số nhà mạng. Tốc độ có thể thay đổi tùy địa điểm và nhà mạng. Để biết thông tin về hỗ trợ mạng 5G, vui lòng liên hệ nhà mạng và truy cập apple.com/iphone/cellular.</li>
                        <li>iPhone 14 Pro có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt.</li>
                        <li>Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô máy. Không bảo hành sản phẩm bị hỏng do thấm chất lỏng.</li>
                        <li>Một số tính năng không khả dụng tại một số quốc gia hoặc khu vực.</li>
                    </ul>
                </div>
            </div>
            <div className={cx('read-more', `${!height ? "active" : ""}`)} onClick={handleHeight}>Xem thêm</div>
            <div className={cx('read-less', `${height ? "active" : ""}`)} onClick={handleHeight}>Thu gọn</div>
        </>
    )
}
export default Overview
