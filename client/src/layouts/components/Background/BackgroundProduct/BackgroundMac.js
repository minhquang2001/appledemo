import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from './BackgroundProduct.module.scss'
import { bannerMacs } from "~/assets/data/banner";

const cx = classNames.bind(styles)
function BackgroundMac() {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === bannerMacs.length - 1 ? 0 : prevIndex + 1
                ),
            4000
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    const location = useLocation()
    const [product, setProduct] = useState([]);

    const path = location.pathname
    const heading = path.split('/')[1]
    const h1 = heading.slice(0, (heading.length - 1))
    console.log(path, heading, h1)
    useEffect(() => {
        fetch(`https://api-uit.herokuapp.com/api/background${heading}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [heading])
    console.log(product)
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('slideshowSlider')}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {product && product.map((banner, index) =>
                    <img key={index} className={cx('background')} src={banner.url} alt='background' />
                    // <div key= {index} className={cx('backgrounds')} style={{backgroundImage : `url(${banner.images})`}}></div>
                )}
            </div>
            <div className={cx('slideshowDots')}>
                {product && product.map((_, idx) => (
                    <div
                        key={idx}
                        className={cx('slideshowDot', `${index === idx ? "active" : ""}`)}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export { BackgroundMac }