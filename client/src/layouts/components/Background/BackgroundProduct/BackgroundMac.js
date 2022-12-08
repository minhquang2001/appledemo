import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { bannerIpads, bannerIphones, bannerLoudSpeakers, bannerWatchs } from '~/assets/data/banner';

import styles from './BackgroundProduct.module.scss';
import { bannerMacs } from '~/assets/data/banner';

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


    const path = location.pathname;
    const heading = path.split('/')[1];
    let category = ''
    switch (heading) {
        case "iphones":
            category = bannerIphones;
            break;
        case "ipads":
            category = bannerIpads;
            break;
        case "macs":
            category = bannerMacs;
            break;
        case "watchs":
            category = bannerWatchs;
            break
        case "loudspeakers":
            category = bannerLoudSpeakers;
            break
        default:
            category = undefined;
    }
    console.log(category)


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
        let bannerIndex = width > '739' ? category : category;
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => (prevIndex === bannerIndex.length - 1 ? 0 : prevIndex + 1)),
            4000,
        );
        return () => {
            resetTimeout();
        };
    }, [index, width, category]);

    return (
        <div className={cx('wrapper')}>
            {width > '739' ? (
                <div className={cx('slideshowSlider')} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {category.map((banner, index) => (
                        <img key={index} className={cx('background')} src={banner.images} alt="background" />
                    ))}
                </div>
            ) : (
                <div className={cx('slideshowSlider')} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {category.map((banner, index) => (
                        <img key={index} className={cx('background')} src={banner.images} alt="background" />
                    ))}
                </div>
            )}
            <div className={cx('slideshowDots')}>
                {width > '739'
                    ? category.map((_, idx) => (
                        <div
                            key={idx}
                            className={cx('slideshowDot', `${index === idx ? 'active' : ''}`)}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))
                    : category.map((_, idx) => (
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
