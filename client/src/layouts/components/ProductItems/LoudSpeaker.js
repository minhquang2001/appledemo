import classNames from "classnames/bind";
import styles from "./ProductItems.module.scss"
import { loudspeakers } from "~/assets/data/product";


import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function LoudSpeaker() {
    function ArrayNew(product) {
        if (Number.isFinite(product.id) && product.id <= 4) {
            return true
        }
        return false
    } 
    const Product = loudspeakers.filter(ArrayNew)
    return (
        <div>
            <h1 className={cx('heading')}>Âm thanh</h1>
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    {Product.map((loudspeakers) =>
                        <div className={cx('col wide l-3 m-4 c-6')} key={loudspeakers.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${loudspeakers.image})` }}></div>
                                <p className={cx('product-name')}>{loudspeakers.name}</p>
                                <p className={cx('product-price')}>Giá từ {loudspeakers.price}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('button-wrapper')}>
                        <Link to='' className={cx('button')}>Xem tất cả</Link>
                </div>
            </div>
        </div >
    );
}

export default LoudSpeaker;