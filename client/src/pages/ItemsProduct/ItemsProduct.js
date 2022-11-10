import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { BackgroundMac } from '~/layouts/components/Background/BackgroundProduct'
import config from "~/config";
// import { macs } from "~/assets/data/product"
import styles from './ItemsProduct.module.scss'


const cx = classNames.bind(styles)
function MacPage() {
    const location = useLocation()
    const [product, setProduct] = useState([]);

    const path = location.pathname
    const heading = path.split('/')[1]
    const h1 = heading.slice(0,(heading.length - 1))
    console.log(path, heading, h1)
    useEffect(() => {
        fetch(`https://api-uit.herokuapp.com/api/${path}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [path])
    // console.log(product)
    return (
        <>
            <div className={cx('wrapper_heading')}>
                <div className={cx('link_page')}>
                    <Link to={config.routes.home}>Trang chủ</Link>
                    <p className={cx('link_heading')}>/ {h1}</p>
                </div>
                <h1 className={cx('heading')}>{h1}</h1>
            </div>
            <BackgroundMac />
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    {product && product.map((product) =>
                        <div className={cx('col wide l-3 m-4 c-6')} key={product.id}>
                            <Link to={`${path}/${product.id}`} className={cx('wrapper')}>
                                <div className={cx('wrap-background')} style={{padding: '40px 12px 28px'}}>
                                    <div className={cx('background-product')} style={{ backgroundImage: `url(${product.imageBackground})` }}></div>
                                </div>
                                <p className={cx('product-name')}>{product.name}</p>
                                <p className={cx('product-price')}>Giá từ {product.price[0]}</p>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default MacPage;