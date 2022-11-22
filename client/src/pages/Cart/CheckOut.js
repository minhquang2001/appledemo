import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from './CheckOut.module.scss';
import { removeItem } from 'src/pages/SingleProduct/redux/cartSlice';

const cx = classNames.bind(style);
function CheckOut() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const getTotal = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice };
    };

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent;
    };

    const totalPrice = getTotal().totalPrice;
    const priceTotalString = getText(totalPrice.toLocaleString().concat('đ'));
    return (
        <>
            {cart.length > 0 ? (
                <div className={cx('wrap')}>
                    <div className="grid wide">
                        <div className={cx('heading')}>Thanh toán</div>
                        <div className="wide row">
                            <div className="wide l-8 m-6 c-12">
                                <form>
                                    <div className={cx('form')}>
                                        <h3>Thông tin nhận hàng</h3>
                                        <div className={cx('flex-radio')}>
                                            <div className={cx('wrap-radio')}>
                                                <input type="radio" id="male" name="sex" value="male" />
                                                <label htmlFor="male">Anh</label>
                                            </div>
                                            <div className={cx('wrap-radio')}>
                                                <input type="radio" id="female" name="sex" value="female" />
                                                <label htmlFor="female">Chị</label>
                                            </div>
                                        </div>
                                        <div className={cx('wrap-information')}>
                                            <div className={cx('wrap-input_small')}>
                                                <input
                                                    spellCheck="false"
                                                    className={cx('input-small')}
                                                    placeholder="Họ và tên"
                                                />
                                            </div>
                                            <div className={cx('wrap-input_small')}>
                                                <input
                                                    spellCheck="false"
                                                    className={cx('input-small')}
                                                    placeholder="Số điện thoại"
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('wrap-information')}>
                                            <div className={cx('wrap-input_large')}>
                                                <input
                                                    spellCheck="false"
                                                    className={cx('input-large')}
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className={cx('wrap-option__buy')}>
                                            <h3>Chọn phương thức nhận hàng</h3>
                                            <div className={cx('flex-radio')}>
                                                <div className={cx('wrap-radio')}>
                                                    <input type="radio" id="shop" name="location" value="shop" />
                                                    <label htmlFor="shop">Nhận tại cửa hàng</label>
                                                </div>
                                                <div className={cx('wrap-radio')}>
                                                    <input type="radio" id="home" name="location" value="home" />
                                                    <label htmlFor="home">Giao tận nơi</label>
                                                </div>
                                            </div>
                                            <div className={cx('wrap-information')}>
                                                <div className={cx('wrap-input_small')}>
                                                    <label>Tỉnh / Thành Phố</label>
                                                    <input
                                                        spellCheck="false"
                                                        className={cx('input-small')}
                                                        placeholder="VD: TPHCM, HANOI"
                                                    />
                                                </div>
                                                <div className={cx('wrap-input_small')}>
                                                    <label>Quận / Huyện</label>
                                                    <input
                                                        spellCheck="false"
                                                        className={cx('input-small')}
                                                        placeholder="VD: Quận 1, ..."
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx('wrap-information')}>
                                                <div className={cx('wrap-input_large')}>
                                                    <label>Địa chỉ</label>
                                                    <input
                                                        spellCheck="false"
                                                        className={cx('input-large')}
                                                        placeholder="Địa chỉ"
                                                    />
                                                </div>
                                            </div>
                                            <div className={cx('wrap-information')}>
                                                <div className={cx('wrap-input_large')}>
                                                    <label>Ghi chú</label>
                                                    <textarea
                                                        spellCheck="false"
                                                        className={cx('input-large')}
                                                        placeholder="Ghi chú (không bắt buộc)"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="wide l-4 m-6 c-12">
                                <form>
                                    <div className={cx('form')}>
                                        <h3>
                                            Mỗi đơn hàng được đặt 1 sản phẩm. Nếu bạn chọn nhiều sản phẩm, hệ thống sẽ
                                            chỉ ghi nhận sản phẩm ở trên cùng.
                                        </h3>
                                        <p>Nếu bạn muốn mua thêm sản phẩm, bạn có thể tạo đơn hàng mới.</p>
                                        <div className={cx('wrap-cart')}>
                                            {cart &&
                                                cart?.map((product, idx) => (
                                                    <div className={cx('product-cart')} key={idx}>
                                                        <img className={cx('cart-img')} src={product.image} alt="" />
                                                        <div className={cx('wrapper-cart')}>
                                                            <div className={cx('name-cart')}>{product.name}</div>
                                                            <p className={cx('price-cart')}>
                                                                {product.quantity} x{' '}
                                                                {getText(product.price.toLocaleString().concat('đ'))}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className={cx('wrap-total')}>
                                            <h3>Total:</h3>
                                            <h3>{priceTotalString}</h3>
                                        </div>
                                        <div className={cx('wrap-pay')}>
                                            <div
                                                className={cx('cart-buy')}
                                                
                                            >
                                                Đặt hàng
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('wrap')}>
                    <div className="grid wide">
                        <div className={cx('heading')}>Giỏ hàng</div>
                        <div className={cx('wrap-note')}>
                            <FontAwesomeIcon icon={faCircleExclamation} />
                            <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                        </div>
                        <div className={cx('margin-top')}>
                            <Link to="/" className={cx('button-backtoshop')}>
                                Quay trở lại cửa hàng
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CheckOut;
