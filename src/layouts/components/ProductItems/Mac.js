import classNames from "classnames/bind";
import styles from "./ProductItems.module.scss"
import { macs } from "~/assets/data/product";


import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Mac() {
    return (
        <div>
            <h1 className={cx('heading')}>Mac</h1>
            <div className={cx('grid')}>
                <div className={cx('grid__row')}>
                    {macs.map((mac) =>
                        <div className={cx('grid__column-3')} key={mac.id}>
                            <div className={cx('wrapper')}>
                                <div className={cx('background-product')} style={{ backgroundImage: `url(${mac.image})` }}></div>

                                <p className={cx('product-name')}>{mac.name}</p>
                                <p className={cx('product-price')}>Giá từ {mac.price}</p>
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

export default Mac;