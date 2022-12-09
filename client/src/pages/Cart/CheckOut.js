import React, { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from './CheckOut.module.scss';
import { removeAllItem } from 'src/pages/SingleProduct/redux/cartSlice';

const cx = classNames.bind(style);
function CheckOut() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    // console.log(cart)
    
    const arrayListProduct = cart?.map((product) => 

        ({productDetailId : (product.id), qty: product.quantity})
    
    )
    // console.log(arrayListProduct)
    const [dataCart, setDataCart] = useState({
        name: '',
        address: '',
        numberPhone: '',
        note: null,
        listProducts: arrayListProduct
    });
    // console.log(dataCart)
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setDataCart((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://api.levanphuc.asia/api/v1/order', dataCart);
            dispatch(removeAllItem())
            navigate('/');
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };
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

                                        <div className={cx('wrap-information')}>
                                            <div className={cx('wrap-input_small')}>
                                                <input
                                                    spellCheck="false"
                                                    className={cx('input-small')}
                                                    placeholder="Họ và tên"
                                                    name="name"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className={cx('wrap-input_small')}>
                                                <input
                                                    spellCheck="false"
                                                    className={cx('input-small')}
                                                    placeholder="Số điện thoại"
                                                    name="numberPhone"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className={cx('wrap-option__buy')}>
                                            <div className={cx('wrap-information')}>
                                                <div className={cx('wrap-input_large')}>
                                                    <label>Địa chỉ</label>
                                                    <input
                                                        spellCheck="false"
                                                        className={cx('input-large')}
                                                        placeholder="Địa chỉ"
                                                        name="address"
                                                        onChange={handleChange}
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
                                                        name="note"
                                                        onChange={handleChange}
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
                                                    <div className={cx('product-cart')} key={idx} >
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
                                        <div className={cx('wrap-pay')} >
                                            <div className={cx('cart-buy')} onClick={handleSubmit}>Đặt hàng</div>
                                        </div>
                                        {error && "Something went wrong!"}
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
