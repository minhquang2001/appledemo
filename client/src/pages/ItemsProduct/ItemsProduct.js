import classNames from "classnames/bind";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { BackgroundMac } from '~/layouts/components/Background/BackgroundProduct'
import config from "~/config";
// import { macs } from "~/assets/data/product"
import styles from './ItemsProduct.module.scss'
import PageLoading from "~/components/Loading/PageLoading";
import * as categoryApi  from "~/services/categoryApi";


const cx = classNames.bind(styles)
function MacPage() {
    const location = useLocation()
    const [product, setProduct] = useState([]);
    const [data, setData] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const path = location.pathname
    const heading = path.split('/')[1]
    let category=''
    switch (heading) {
        case "iphones":
          category = 1;
          break;
        case "ipads":
          category = 2;
          break;
        default:
          category = 3;
    }
    // console.log(category)
    const h1 = heading.slice(0,(heading.length - 1))
    // console.log(path, heading, h1)
    useEffect(() => {
        const fetchApi = async () => {
            const result = await categoryApi.categoryApi(category);    
            setProduct(result.data);
            setIsLoading(false)
            setData(true)
        };

        fetchApi();
        // fetch(`https://606a-2001-ee0-5200-4c40-c534-535f-6193-e620.ngrok.io/v1/category/${category}/groupproducts`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setProduct(data.data.data)
        //         setData(true)
        //         setIsLoading(false)
        //     })
    }, [category])
    // console.log(product)
    return (
        <>
            {isLoading && <PageLoading />}
            {data && (
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
                                        <div className={cx('background-product')} style={{ backgroundImage: `url(${product.image})` }}></div>
                                    </div>
                                    <p className={cx('product-name')}>{product.name}</p>
                                    <p className={cx('product-price')}>Giá từ {product.price}</p>
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