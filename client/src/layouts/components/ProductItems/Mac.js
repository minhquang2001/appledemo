import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./ProductItems.module.scss"
import { macs } from "~/assets/data/product";
import config from "~/config";



const cx = classNames.bind(styles)

function Mac() {
    function ArrayNew(product) {
        if (Number.isFinite(product.id) && product.id <= 4) {
            return true
        }
        return false
    }
    const Product = macs.filter(ArrayNew)
    return (
        <div>
            <h1 className={cx('heading')}>Mac</h1>
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    {Product.map((mac) =>
                        <div className={cx('col wide l-3 m-4 c-6')} key={mac.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${mac.image})` }}></div>
                                <p className={cx('product-name')}>{mac.name}</p>
                                <p className={cx('product-price')}>Giá từ {mac.price}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('button-wrapper')}>
                        <Link to={config.routes.mac} className={cx('button')}>Xem tất cả</Link>
                </div>
            </div>
        </div >
    );
}

export default Mac;