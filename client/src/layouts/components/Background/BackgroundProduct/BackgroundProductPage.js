import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { bannerIpads, bannerIphones, bannerLoudSpeakers, bannerWatchs, bannerMacs } from '~/assets/data/banner';
import { bannerIphonesMobile, bannerIpadsMobile, bannerMacsMobile, bannerWatchsMobile, bannerLoudSpeakersMobile } from 'src/assets/data/bannerMobile';
import styles from './BackgroundProduct.module.scss';

const cx = classNames.bind(styles);
function BackgroundProductPage() {
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
    let categoryMobile = ''
    switch (heading) {
        case "iphones":
            category = bannerIphones;
            categoryMobile = bannerIphonesMobile;
            break;
        case "ipads":
            category = bannerIpads;
            categoryMobile = bannerIpadsMobile;
            break;
        case "macs":
            category = bannerMacs;
            categoryMobile = bannerMacsMobile;
            break;
        case "watchs":
            category = bannerWatchs;
            categoryMobile = bannerWatchsMobile;
            break
        case "loudspeakers":
            category = bannerLoudSpeakers;
            categoryMobile = bannerLoudSpeakersMobile;
            break
        default:
            category = undefined;
    }


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
        let bannerIndex = width > '739' ? category : categoryMobile;
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => (prevIndex === bannerIndex.length - 1 ? 0 : prevIndex + 1)),
            4000,
        );
        return () => {
            resetTimeout();
        };
    }, [index, width, category, categoryMobile]);

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
                    {categoryMobile.map((banner, index) => (
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
                    : categoryMobile.map((_, idx) => (
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

export default BackgroundProductPage;
