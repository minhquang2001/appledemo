import React from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './SingleProduct.module.scss'

import img from '~/assets/images/iphone/iphone13promax.webp'
const cx = classNames.bind(styles)
function SingleProduct() {
    const location = useLocation()

    const productId = location.pathname.split('/')[2]
    const path = location.pathname
    console.log(productId, path)
  return (
    <div>
      <div className="grid wide">
        <div className="wide row">
          <div className="wide l-6">
            <img src={img} alt="anh" />
          </div>
          <div className="wide l-6">Information heading</div>
        </div>
        <div className={cx("wrap-information")}>
          <div className={cx("wrap-heading")}>
            <div>Mo ta</div>
            <div>Mo ta</div>
            <div>Mo ta</div>
            <div>Mo ta</div>
          </div>
          <div className="wrap-content" style={{textAlign: 'center'}}>
            Content
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct