import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";


import config from "~/config";
import images from "~/assets/images";
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt='Logo' />
                </Link>
                <div className={cx('list-wrap')}>
                    <Link to={config.routes.iphone} className={cx('list-product')}>iPhone</Link>
                    <Link to={config.routes.ipad} className={cx('list-product')}>iPad</Link>
                    <Link to={config.routes.mac} className={cx('list-product')}>Macbook</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Watch</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Âm Thanh</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Dịch Vụ</Link>
                </div>
                <div className={cx('wrap-icon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                    <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                </div>
            </div>
        </div>
    );
}

export default Header;