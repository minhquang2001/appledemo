import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import parse from 'html-react-parser'
import styles from './OptionProduct.module.scss'

const cx = classNames.bind(styles)

function Overview() {
    const [height, setHeight] = useState(false)
    const handleHeight = () => {
        setHeight(!height)
    }
    const [product, setProduct] = useState({});
    const location = useLocation()    
    // const path = location.pathname
    const productId = location.pathname.split('/')[2];
    useEffect(() => {
        fetch(`https://api.levanphuc.asia/api/v1/groupproduct/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data.data)
            })
    }, [productId])
    const data = product && product.description 
    return (
        <>
            <div className={cx('wrap-box', `${height ? "active" : ""}`)}>
                <>{data && parse(data)}</>
            </div>
            <div className={cx('read-more', `${!height ? "active" : ""}`)} onClick={handleHeight}>Xem thêm</div>
            <div className={cx('read-less', `${height ? "active" : ""}`)} onClick={handleHeight}>Thu gọn</div>
        </>
    )
}
export default Overview
