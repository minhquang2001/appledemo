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
            <div className={cx('grid')}>
                <div className={cx('grid__row')}>
                    {Product.map((loudspeaker) =>
                        <div className={cx('grid__column-3')} key={loudspeaker.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${loudspeaker.image})` }}></div>

                                <p className={cx('product-name')}>{loudspeaker.name}</p>
                                <p className={cx('product-price')}>Giá từ {loudspeaker.price}</p>

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

export default LoudSpeaker;