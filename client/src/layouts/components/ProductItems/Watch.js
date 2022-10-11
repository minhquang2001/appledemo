import classNames from "classnames/bind";
import styles from "./ProductItems.module.scss"
import { watchs } from "~/assets/data/product";


import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Watch() {
    function ArrayNew(product) {
        if (Number.isFinite(product.id) && product.id <= 4) {
            return true
        }
        return false
    } 
    const Product = watchs.filter(ArrayNew)
    return (
        <div>
            <h1 className={cx('heading')}>Watch</h1>
            <div className={cx('grid')}>
                <div className={cx('grid__row')}>
                    {Product.map((watch) =>
                        <div className={cx('grid__column-3')} key={watch.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${watch.image})` }}></div>

                                <p className={cx('product-name')}>{watch.name}</p>
                                <p className={cx('product-price')}>Giá từ {watch.price}</p>
                            </div>
                        </div>

                    )
                    }
                    <div className={cx('button-wrapper')}>
                        <Link to='' className={cx('button')}>Xem tất cả</Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Watch;