import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { BackgroundMac } from '~/layouts/components/Background/BackgroundProduct'
import config from "~/config";
import styles from './ItemsProduct.module.scss'
import PageLoading from "~/components/Loading/PageLoading";
import * as categoryApi from "~/services/categoryApi";


const cx = classNames.bind(styles)
function MacPage() {
    const location = useLocation()
    const [product, setProduct] = useState([]);
    const [data, setData] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const path = location.pathname
    const heading = path.split('/')[1]
    let category = ''
    let header = ''
    switch (heading) {
        case "iphones":
            category = 5;
            header = "iPhone";
            break;
        case "ipads":
            category = 1;
            header = "iPad";
            break;
        case "macs":
            category = 3;
            header = "Mac";
            break;
        case "watchs":
            category = 4;
            header = "Apple Watch";
            break
        case "loudspeakers":
            category = 2;
            header = "Âm Thanh";
            break
        default:
            category = 6;
    }
    // console.log(path, heading, h1)
    useEffect(() => {
        const fetchApi = async () => {
            const result = await categoryApi.categoryApi(category);
            setProduct(result);
            setIsLoading(false)
            setData(true)
        };

        fetchApi();
        // fetch(`https://api-uit.onrender.com/api/${heading}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setProduct(data)
        //         setData(true)
        //         setIsLoading(false)
        //     })
    }, [category])



    return (
        <>
            {isLoading && <PageLoading />}
            {data && (
                <>
                    <div className={cx('wrapper_heading')}>
                        <div className={cx('link_page')}>
                            <Link to={config.routes.home}>Trang chủ</Link>
                            <p className={cx('link_heading')}>/ {header}</p>
                        </div>
                        <h1 className={cx('heading')}>{header}</h1>
                    </div>
                    {product && <BackgroundMac />}
                    <div className={cx('grid wide')}>
                        <div className={cx('row wide')}>
                            {product && product.map((product) =>
                                <div className={cx('col wide l-3 m-4 c-6')} key={product.id}>
                                    <Link to={`${path}/${product.id}`} className={cx('wrapper')}>
                                        <div className={cx('wrap-background')} style={{ padding: '40px 12px 28px' }}>
                                            <div className={cx('background-product')} style={{ backgroundImage: `url(${product.image})` }}></div>
                                        </div>
                                        <p className={cx('product-name')}>{product.name}</p>
                                        <p className={cx('product-price')}>Giá từ {(product.price).toLocaleString().concat('đ')}</p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default MacPage;