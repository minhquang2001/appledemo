import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

import styles from './OptionProduct.module.scss'

const cx = classNames.bind(styles)

function Overview() {
    const [height, setHeight] = useState(false)
    const handleHeight = () => {
        setHeight(!height)
    }
    const [product, setProduct] = useState({});
    const location = useLocation()    
    const path = location.pathname
    useEffect(() => {
    fetch(`https://api-uit.herokuapp.com/api/${path}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }, [path])
    return (
        <>
            <div className={cx('wrap-box', `${height ? "active" : ""}`)}>
                {product.description && product.description.map((desc, index) =>
                (
                    <div className={cx('box-information')} key = {index}>
                        <h1>{desc.heading}</h1>
                        <ul>

                        {desc.desc.map((value, index) => 
                        (<li key={index}>{value}</li>)
                        )}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={cx('read-more', `${!height ? "active" : ""}`)} onClick={handleHeight}>Xem thêm</div>
            <div className={cx('read-less', `${height ? "active" : ""}`)} onClick={handleHeight}>Thu gọn</div>
        </>
    )
}
export default Overview
