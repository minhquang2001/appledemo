import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { BackgroundIpad } from "~/layouts/components/Background/BackgroundProduct";
import config from "~/config";
import { ipads } from "~/assets/data/product"
import styles from '../ItemsProduct.module.scss'


const cx = classNames.bind(styles)
function IpadPage() {
    return ( 
        <>
            <div className={cx('wrapper_heading')}>
                <div className={cx('link_page')}>
                    <Link to={config.routes.home}>Trang chủ</Link>
                    <p className={cx('link_heading')}>/ iPad</p>
                </div>
                <h1 className={cx('heading')}>iPad</h1>
            </div>
            <BackgroundIpad />
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    {ipads.map((ipad) =>
                        <div className={cx('col wide l-3 m-4 c-6')} key={ipad.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${ipad.image})` }}></div>
                                <p className={cx('product-name')}>{ipad.name}</p>
                                <p className={cx('product-price')}>Giá từ {ipad.price}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
     );
}

export default IpadPage;