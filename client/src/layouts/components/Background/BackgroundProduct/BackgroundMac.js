import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './BackgroundProduct.module.scss';
// import { bannerMacs } from '~/assets/data/banner';

const cx = classNames.bind(styles);
function BackgroundMac() {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    const location = useLocation();
    const [banner, setBanner] = useState([]);
    const [bannerMobile, setBannerMobile] = useState([]);

    const path = location.pathname;
    const heading = path.split('/')[1];
    // const h1 = heading.slice(0, heading.length - 1);
    // console.log(path, heading, h1)

    // API banner
    useEffect(() => {
        fetch(`https://api-uit.herokuapp.com/api/background${heading}`)
            .then((res) => res.json())
            .then((data) => {
                setBanner(data);
            });
    }, [heading]);
    // console.log(product)

    //API banner Mobile
    useEffect(() => {
        fetch(`https://api-uit.herokuapp.com/api/backgroundmb${heading}`)
            .then((res) => res.json())
            .then((data) => {
                setBannerMobile(data);
            });
    }, [heading]);

    // set width responsive
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    useEffect(() => {
        let bannerIndex = width > '739' ? banner : bannerMobile;
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => (prevIndex === bannerIndex.length - 1 ? 0 : prevIndex + 1)),
            4000,
        );
        return () => {
            resetTimeout();
        };
    }, [index, width, banner, bannerMobile]);

    return (
        <div className={cx('wrapper')}>
            {width > '739' ? (
                <div className={cx('slideshowSlider')} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {banner.map((banner, index) => (
                        <img key={index} className={cx('background')} src={banner.url} alt="background" />
                    ))}
                </div>
            ) : (
                <div className={cx('slideshowSlider')} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {bannerMobile.map((banner, index) => (
                        <img key={index} className={cx('background')} src={banner.url} alt="background" />
                    ))}
                </div>
            )}
            <div className={cx('slideshowDots')}>
                {width > '739'
                    ? banner.map((_, idx) => (
                          <div
                              key={idx}
                              className={cx('slideshowDot', `${index === idx ? 'active' : ''}`)}
                              onClick={() => {
                                  setIndex(idx);
                              }}
                          ></div>
                      ))
                    : bannerMobile.map((_, idx) => (
                          <div
                              key={idx}
                              className={cx('slideshowDot', `${index === idx ? 'active' : ''}`)}
                              onClick={() => {
                                  setIndex(idx);
                              }}
                          ></div>
                      ))}
            </div>
        </div>
    );
}

export { BackgroundMac };
