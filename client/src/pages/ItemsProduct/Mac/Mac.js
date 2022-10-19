import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import {BackgroundMac} from '~/layouts/components/Background/BackgroundProduct'
import config from "~/config";
import { macs } from "~/assets/data/product"
import styles from '../ItemsProduct.module.scss'


const cx = classNames.bind(styles)
function MacPage() {
    return ( 
        <>
            <div className={cx('wrapper_heading')}>
                <div className={cx('link_page')}>
                    <Link to={config.routes.home}>Trang chủ</Link>
                    <p className={cx('link_heading')}>/ Mac</p>
                </div>
                <h1 className={cx('heading')}>Mac</h1>
            </div>
            <BackgroundMac />
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    {macs.map((mac) =>
                        <div className={cx('col wide l-3 m-4 c-6')} key={mac.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${mac.image})` }}></div>
                                <p className={cx('product-name')}>{mac.name}</p>
                                <p className={cx('product-price')}>Giá từ {mac.price}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
     );
}

export default MacPage;