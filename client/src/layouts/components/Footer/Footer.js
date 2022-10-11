import { Link } from 'react-router-dom'


import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import styles from "./Footer.module.scss"
import config from "~/config";
import images from "~/assets/images";
import { faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles)
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <div className={cx('grid__row')}>
                    <div className={cx('grid__column-4')}>
                        <div className={cx('wrap-content')}>
                            <Link to={config.routes.home} className={cx('logo-link')}>
                                <img src={images.logo} alt='Logo' />
                            </Link>
                            <div className={cx('text')}>Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.</div>
                            <div className={cx('wrap-icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('grid__column-2')}>
                        <div className={cx('wrap-content')}>
                            <ul className={cx('heading')}>Sản phẩm</ul>
                            <div className={cx('wrap__column-footer')}>
                                <Link to='' className={cx('information')}>iPhone</Link><br />
                                <Link to='' className={cx('information')}>iPad</Link><br />
                                <Link to='' className={cx('information')}>Mac</Link><br />
                                <Link to='' className={cx('information')}>Apple Watch</Link><br />
                                <Link to='' className={cx('information')}>Âm thanh</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('grid__column-2')}>
                        <div className={cx('wrap-content')}>
                            <ul className={cx('heading')}>Thông tin</ul>
                            <div className={cx('wrap__column-footer')}>
                                <Link to='' className={cx('information')}>Giới thiệu</Link><br />
                                <Link to='' className={cx('information')}>Khuyến mãi</Link><br />
                                <Link to='' className={cx('information')}>Bảo hành và sửa chữa</Link><br />
                                <Link to='' className={cx('information')}>Tuyển dụng</Link><br />
                                <Link to='' className={cx('information')}>Tin tức</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('grid__column-2')}>
                        <div className={cx('wrap-content')}>
                            <ul className={cx('heading')}>Chính sách</ul>
                            <div className={cx('wrap__column-footer')}>
                                <Link to='' className={cx('information')}>Trả góp</Link><br />
                                <Link to='' className={cx('information')}>Giao hàng</Link><br />
                                <Link to='' className={cx('information')}>Đổi trả</Link><br />
                                <Link to='' className={cx('information')}>Bảo hành</Link><br />
                                <Link to='' className={cx('information')}>Hủy giao dịch</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('grid__column-2')}>
                        <div className={cx('wrap-content')}>
                            <ul className={cx('heading')}>Liên hệ</ul>
                            <div className={cx('wrap__column-footer')}>
                                <div><span className={cx('information-call')}>Mua hàng:</span><span className={cx('call')}>113</span></div>
                                <div><span className={cx('information-call')}>Khiếu nại:</span><span className={cx('call')}>114</span></div>
                                <div><span className={cx('information-call')}>Đối tác và Doanh nghiệp:</span><span className={cx('call')}>115</span></div>
                                <img className={cx('bocongthuong')} src={images.bocongthuong} alt="bocongthuong" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;