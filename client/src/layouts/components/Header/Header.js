import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import config from "~/config";
import images from "~/assets/images";
import styles from './Header.module.scss'
import { ipads } from "~/assets/data/product";

const cx = classNames.bind(styles)

function Header() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const inputRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 3000)
    })
    const searchActive = () => {
        setIsActive(true)
    }

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const searchClose = () => {
        setSearchValue('')
        setIsActive(false)
        setShowResult(false)
    }
    const handleHindResult = () => {
        setShowResult(false)
    }
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    //render list product search demo
    function ArrayNew(product) {
        if (Number.isFinite(product.id) && product.id <= 7) {
            return true
        }
        return false
    }
    const Product = ipads.filter(ArrayNew)

    // toggle active search
    const active = isActive ? 'active' : ''
    const classes = cx('search-wrapper', { active })

    // toggle cart
    const ToggleCart = () => {
        setShowCart(!showCart)
    }
    const show = showCart ? 'toggle-cart' : ''
    return (
        <>

            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt='Logo' style={{ display: "block" }} />
                    </Link>
                    <div className={cx('list-wrap')}>
                        <Link to={config.routes.iphone} className={cx('list-product')}>iPhone</Link>
                        <Link to={config.routes.ipad} className={cx('list-product')}>iPad</Link>
                        <Link to={config.routes.mac} className={cx('list-product')}>Macbook</Link>
                        <Link to={config.routes.home} className={cx('list-product')}>Watch</Link>
                        <Link to={config.routes.home} className={cx('list-product')}>Âm Thanh</Link>
                        <Link to={config.routes.home} className={cx('list-product')}>Dịch Vụ</Link>
                    </div>
                    <div className={cx('box-icon')}>
                        <div className={cx('wrap-icon')}>

                            <div className='c-0 m-12 l-12'>
                                <Tippy
                                    interactive
                                    visible={showResult && searchResult.length > 0}
                                    render={attrs => (
                                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                            <div className={cx('grid')}>
                                                {Product.map((iphone) =>
                                                    <div className={cx('wrapper-product')} key={iphone.id}>
                                                        <img className={cx('image-product')} src={iphone.image} alt="" />
                                                        <div className={cx('wrapper-description')}>
                                                            <div className={cx('product-name')}>{iphone.name}</div>
                                                            <p className={cx('price-name')}>{iphone.price}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    onClickOutside={handleHindResult}
                                >

                                    <div className={classes}>
                                        <div className={cx("input-holder")}>
                                            <input
                                                className={cx("search-input")}
                                                type="text"
                                                spellCheck="false"
                                                placeholder="Bạn tìm gì..."
                                                value={searchValue}
                                                onChange={handleChange}
                                                onFocus={() => setShowResult(true)}
                                            />
                                            <button className={cx("search-icon")} onClick={searchActive}><span></span></button>
                                        </div>
                                        <span className={cx("close")} onClick={searchClose}></span>
                                    </div>
                                </Tippy>
                            </div>
                            <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} onClick={ToggleCart} />

                        </div>
                    </div>
                </div>
                <div className='c-12 m-0 l-0'>
                    <Tippy
                        interactive
                        visible={showResult && searchResult.length > 0}
                        render={attrs => (
                            <div className={cx('search-result-2')} tabIndex="-1" {...attrs}>
                                <div className={cx('wrap-tippy-mobile')}>
                                    {Product.map((iphone) =>
                                        <div className={cx('wrapper-product')} key={iphone.id}>
                                            <img className={cx('image-product')} src={iphone.image} alt="" />
                                            <div className={cx('wrapper-description')}>
                                                <div className={cx('product-name')}>{iphone.name}</div>
                                                <p className={cx('price-name')}>{iphone.price}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        onClickOutside={handleHindResult}
                    >
                        <div className={cx("wrap-search")}>
                            <form>
                                <input
                                    className={cx("search")}
                                    ref={inputRef}
                                    type="text"
                                    spellCheck="false"
                                    placeholder="Bạn tìm gì..."
                                    value={searchValue}
                                    onChange={handleChange}
                                    onFocus={() => setShowResult(true)}
                                />
                            </form>
                            {searchValue && (<div className={cx('icon-xmark')} onClick={handleClear}>
                                <FontAwesomeIcon icon={faXmark} />
                            </div>)}
                            <div className={cx('icon-search')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                        </div>
                        {/* <span className={cx("close")} onClick={searchClose}></span> */}
                    </Tippy>
                </div>

                <div className={cx('list-wrap-2')} >
                    <Link to={config.routes.iphone} className={cx('list-product')}>iPhone</Link>
                    <Link to={config.routes.ipad} className={cx('list-product')}>iPad</Link>
                    <Link to={config.routes.mac} className={cx('list-product')}>Macbook</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Watch</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Âm Thanh</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Dịch Vụ</Link>
                </div>
            </div>
            {show && <div className={cx('wrap-modal')} onClick={ToggleCart}>
            </div>}
            <div className={cx('cart', show)}>
                <FontAwesomeIcon icon={faXmark} className={cx('icon-mark-cart')} onClick={ToggleCart} />
                <div className={cx('height-cart')}>
                    {Product.map((iphone) =>
                        <div className={cx('product-cart')} key={iphone.id}>
                            <img className={cx('cart-img')} src={iphone.image} alt="" />
                            <div className={cx('wrapper-cart')}>
                                <div className={cx('name-cart')}>{iphone.name}</div>
                                <p className={cx('price-cart')}>1 x {iphone.price}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('footer-cart')}>
                    <div className={cx('wrap-total')}>
                        <p>Tạm tính: </p>
                        <p>400.000.000d</p>
                    </div>
                    <div className={cx('wrap-pay')}>
                        <div className={cx('cart-buy')}>MUA NGAY</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;