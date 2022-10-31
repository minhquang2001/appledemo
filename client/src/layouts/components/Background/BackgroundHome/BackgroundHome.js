import classNames from "classnames/bind";
import styles from './BackgroundHome.module.scss'
import { useState, useRef, useEffect } from "react";
import { bannerHome } from "~/assets/data/banner";
import { bannerHomeMobile } from "~/assets/data/bannerMobile";

const cx = classNames.bind(styles)
function Background() {

    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(window.innerWidth)

    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }
    useEffect(() => {
        let bannerIndex = width > '739' ? bannerHome : bannerHomeMobile
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === bannerIndex.length - 1 ? 0 : prevIndex + 1
                ),
            4000
        );
        return () => {
            resetTimeout();
        };
    }, [index, width]);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width])
    return (
        <div className={cx('wrapper')}>

            {width > '739' ?
                (
                    <div
                        className={cx('slideshowSlider')}
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {bannerHome.map((banner, index) =>
                            <img key={index} className={cx('background')} src={banner.images} alt='background' />
                        )
                        }
                    </div>
                )
                :
                (
                    <div
                        className={cx('slideshowSlider')}
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {bannerHomeMobile.map((banner, index) =>
                            <img key={index} className={cx('background')} src={banner.images} alt='background' />
                        )
                        }
                    </div>
                )
            }
            <div className={cx('slideshowDots')}>
                {width > '739' ? (
                    bannerHome.map((_, idx) => (
                        <div
                            key={idx}
                            className={cx('slideshowDot', `${index === idx ? "active" : ""}`)}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    )))
                    :
                    (bannerHomeMobile.map((_, idx) => (
                        <div
                            key={idx}
                            className={cx('slideshowDot', `${index === idx ? "active" : ""}`)}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    )))
                }
            </div>
        </div>
    );
}

export default Background;