import React from 'react'
import classNames from 'classnames/bind'

import styles from './OptionProduct.module.scss'

const cx = classNames.bind(styles)

function Specification() {
    return (
        <>
            <table className={cx('table')}>
                <tbody>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>Dung lượng</th>
                        <td className={cx('value')}>128GB</td>
                    </tr>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>Màn hình</th>
                        <td className={cx('value')}>6.7″ Super Retina XDR display</td>
                    </tr>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>Camera sau</th>
                        <td className={cx('value')}>Chính: khẩu độ ƒ / 1,78, Chụp xa: khẩu độ ƒ / 2.8, Hệ thống camera chuyên nghiệp (48MP chính, 12MP siêu rộng và 12MP tele), Siêu rộng: khẩu độ ƒ / 2.2</td>
                    </tr>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>Camera trước</th>
                        <td className={cx('value')}>2MP, khẩu độ ƒ / 1.9</td>
                    </tr>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>Pin</th>
                        <td className={cx('value')}>Phát video lên tới 29 giờ (theo Apple)</td>
                    </tr>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>Sạc</th>
                        <td className={cx('value')}>Sạc không dây MagSafe và Qi</td>
                    </tr>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>Kết nối mạng</th>
                        <td className={cx('value')}>2 SIM (1 Nano SIM và 1 eSIM hoặc 2 eSIM), hỗ trợ 5G</td>
                    </tr>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>RAM</th>
                        <td className={cx('value')}>6GB</td>
                    </tr>
                    <tr className={cx('color-attribute')}>
                        <th className={cx('label')}>Chống nước</th>
                        <td className={cx('value')}>IP68</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Specification
