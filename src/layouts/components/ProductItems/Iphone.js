import classNames from "classnames/bind";
import styles from "./ProductItems.module.scss"
import { iphones } from "~/assets/data/product";


import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Iphone() {
    function ArrayNew(product) {
        if (Number.isFinite(product.id) && product.id <= 4) {
            return true
        }
        return false
    } 
    const Product = iphones.filter(ArrayNew)
    return (
        <div>
            <h1 className={cx('heading')}>iPhone</h1>
            <div className={cx('grid')}>
                <div className={cx('grid__row')}>
                    {Product.map((iphone) =>        
                            <div className={cx('grid__column-3')} key={iphone.id}>
                                <div className={cx('wrapper')}>
                                    <div className={cx('background-product')} style={{ backgroundImage: `url(${iphone.image})` }}></div>
                                    <p className={cx('product-name')}>{iphone.name}</p>
                                    <p className={cx('product-price')}>Giá từ {iphone.price}</p>
                                </div>
                            </div>
                    )}
                    <div className={cx('button-wrapper')}>
                        <Link to='' className={cx('button')}>Xem tất cả</Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Iphone;