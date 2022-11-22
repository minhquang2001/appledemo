import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { faXmark, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './Cart.module.scss';
import { removeItem } from 'src/pages/SingleProduct/redux/cartSlice';

const cx = classNames.bind(styles);

function Cart() {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);

    // toggle cart
    const ToggleCart = () => {
        setShowCart(!showCart);
    };
    const show = showCart ? 'toggle-cart' : '';

    const cart = useSelector((state) => state.cart);
    // console.log(cart)

    // Tính tổng
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalPrice, totalQuantity };
    };

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent;
    };
    const totalPrice = getTotal().totalPrice;
    const priceTotalString = getText(totalPrice.toLocaleString().concat('đ'));

    return (
        <>
            <div className={cx('wrap-cart')}>
                <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} onClick={ToggleCart} />
                <p>{getTotal().totalQuantity || 0}</p>
            </div>

            {show && <div className={cx('wrap-modal')} onClick={ToggleCart}></div>}
            <div className={cx('cart', show)}>
                <FontAwesomeIcon icon={faXmark} className={cx('icon-mark-cart')} onClick={ToggleCart} />
                {cart.length > 0 ? (
                    <>
                        <div className={cx('height-cart')}>
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

                                        <div
                                            className={cx('cartItem__removeButton')}
                                            onClick={() =>
                                                dispatch(
                                                    removeItem({
                                                        productId: product.id,
                                                        productDetailId: product.idProduct,
                                                    }),
                                                )
                                            }
                                        >
                                            x
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className={cx('footer-cart')}>
                            <div className={cx('wrap-total')}>
                                <p>Tạm tính: </p>
                                <p>{priceTotalString}</p>
                            </div>
                            <div className={cx('wrap-pay')}>
                                <Link to="/checkout" className={cx('cart-buy')} onClick={ToggleCart}>
                                    MUA NGAY
                                </Link>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className={cx('note')}>Bạn chưa có sản phẩm trong giỏ</p>
                )}
            </div>
        </>
    );
}

export default Cart;
