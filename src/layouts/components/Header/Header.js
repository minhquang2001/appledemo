import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import config from "~/config";
import images from "~/assets/images";
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 3000)
    })
    const searchToggle = event => {
        setIsActive(current => !current)
    }
    // function searchToggle(obj) {
    //     var container = $(obj).closest('.search-wrapper');
    //     if (!container.hasClass('active')) {
    //         container.addClass('active');
    //     }
    //     else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
    //         container.removeClass('active');
    //         // clear input
    //         container.find('.search-input').val('');
    //     }
    // }
    const active = isActive ? 'avtive' : ''
    const classes = cx('search-wrapper', { active })
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt='Logo' />
                </Link>
                <div className={cx('list-wrap')}>
                    <Link to={config.routes.iphone} className={cx('list-product')}>iPhone</Link>
                    <Link to={config.routes.ipad} className={cx('list-product')}>iPad</Link>
                    <Link to={config.routes.mac} className={cx('list-product')}>Macbook</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Watch</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Âm Thanh</Link>
                    <Link to={config.routes.home} className={cx('list-product')}>Dịch Vụ</Link>
                </div>
                <div className={cx('wrap-icon')}>

                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                Ket qua
                            </div>
                        )}
                    >
                        {/* <div className={cx('search-box')}>
                            <input type="text" placeholder="Search" />
                            <FontAwesomeIcon className={cx('icon')} icon={faSearch} />
                        </div> */}
                        <div className={classes}>
                            <div className={cx("input-holder")}>
                                <input type="text" className={cx("search-input")} placeholder="Type to search" />
                                <button className={cx("search-icon")} onClick={searchToggle}><span></span></button>
                            </div>
                            <span className={cx("close")} onClick={searchToggle}></span>
                        </div>
                    </Tippy>
                    <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />

                </div>
            </div>
        </div>
    );
}

export default Header;