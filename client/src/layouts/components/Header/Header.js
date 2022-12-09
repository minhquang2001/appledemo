import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import config from "~/config";
import images from "~/assets/images";
import styles from './Header.module.scss'
import Cart from "~/components/Cart/Cart";
import Search from "src/components/Search/Search";
import SearchMobile from "src/components/Search/SearchMobile";
const cx = classNames.bind(styles)

function Header() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt='Logo' style={{ display: "block" }} />
                    </Link>
                    <div className={cx('list-wrap')}>
                        <Link to={config.routes.iphone} className={cx('list-product')}>iPhone</Link>
                        <Link to={config.routes.ipad} className={cx('list-product')}>iPad</Link>
                        <Link to={config.routes.mac} className={cx('list-product')}>Macbook</Link>
                        <Link to={config.routes.watch} className={cx('list-product')}>Watch</Link>
                        <Link to={config.routes.loudspeaker} className={cx('list-product')}>Âm Thanh</Link>
                        <Link to={config.routes.home} className={cx('list-product')}>Dịch Vụ</Link>
                    </div>
                    <div className={cx('box-icon')}>
                        <div className={cx('wrap-icon')}>
                            <div className='c-0 m-12 l-12'>
                                <Search />
                            </div>
                            <Cart />
                        </div>
                    </div>
                </div>
                <div className='c-12 m-0 l-0'>
                    <SearchMobile />
                </div>

                <div className={cx('list-wrap-2')} >
                    <Link to={config.routes.iphone} className={cx('list-product')}>iPhone</Link>
                    <Link to={config.routes.ipad} className={cx('list-product')}>iPad</Link>
                    <Link to={config.routes.mac} className={cx('list-product')}>Macbook</Link>
                    <Link to={config.routes.watch} className={cx('list-product')}>Watch</Link>
                    <Link to={config.routes.loudspeaker} className={cx('list-product')}>Âm Thanh</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Dịch Vụ</Link>
                </div>
            </div>
        </>
    );
}

export default Header;