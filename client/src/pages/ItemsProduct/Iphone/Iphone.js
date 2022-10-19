import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import {BackgroundIphone} from '~/layouts/components/Background/BackgroundProduct'
import config from "~/config";
import { iphones } from "~/assets/data/product"
import styles from '../ItemsProduct.module.scss'


const cx = classNames.bind(styles)
function IphonePage() {
    return ( 
        <>
            <div className={cx('wrapper_heading')}>
                <div className={cx('link_page')}>
                    <Link to={config.routes.home}>Trang chủ</Link>
                    <p className={cx('link_heading')}>/ iPhone</p>
                </div>
                <h1 className={cx('heading')}>iPhone</h1>
            </div>
            <BackgroundIphone />
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    {iphones.map((iphone) =>
                        <div className={cx('col wide l-3 m-4 c-6')} key={iphone.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${iphone.image})` }}></div>
                                <p className={cx('product-name')}>{iphone.name}</p>
                                <p className={cx('product-price')}>Giá từ {iphone.price}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
     );
}

export default IphonePage;