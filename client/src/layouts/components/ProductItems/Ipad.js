import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./ProductItems.module.scss"
import { ipads } from "~/assets/data/product";
import config from "~/config";



const cx = classNames.bind(styles)

function Ipad() {
    function ArrayNew(product) {
        if (Number.isFinite(product.id) && product.id <= 4) {
            return true
        }
        return false
    }
    const Product = ipads.filter(ArrayNew)
    return (
        <div>
            <h1 className={cx('heading')}>iPad</h1>
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    {Product.map((ipad) =>
                        <div className={cx('col wide l-3 m-4 c-6')} key={ipad.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${ipad.image})` }}></div>
                                <p className={cx('product-name')}>{ipad.name}</p>
                                <p className={cx('product-price')}>Giá từ {ipad.price}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('button-wrapper')}>
                        <Link to={config.routes.ipad} className={cx('button')}>Xem tất cả</Link>
                </div>
            </div>
        </div >
    );
}

export default Ipad;