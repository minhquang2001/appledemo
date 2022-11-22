import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

const cx = classNames.bind(styles)
function NotFound() {
  return (
    <div className={cx('wrap')}>
        <FontAwesomeIcon icon={faCircleInfo} />
        <h1>404 Not Found</h1>
        <h1>Oops! Trang tìm kiếm của bạn không tồn tại</h1>
        <Link to='/' className={cx('button-backtoshop')}>Trở về trang chủ</Link>
    </div>
  )
}

export default NotFound