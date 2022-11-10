import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './OptionProduct.module.scss'

const cx = classNames.bind(styles)

function Specification() {
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
            <table className={cx('table')}>
                <tbody>
                    {product.specifications && product.specifications.map((option, index) =>
                    (
                        <tr className={cx('color-attribute')} key={index}>
                            <th className={cx('label')}>{option.label}</th>
                            <td className={cx('value')}>
                                {option.value && option.value.map((value, index) =>
                                    <p key={index}>{value}<br /></p>
                                )}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Specification
