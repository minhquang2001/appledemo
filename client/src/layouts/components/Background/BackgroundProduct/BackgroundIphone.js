import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import styles from './BackgroundProduct.module.scss'
import { bannerIphones } from "~/assets/data/banner";

const cx = classNames.bind(styles)
function BackgroundIphone() {
    
        const [index, setIndex] = useState(0);
        const timeoutRef = useRef(null);

        function resetTimeout() {
            if(timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
        useEffect(() => {
            resetTimeout();
            timeoutRef.current = setTimeout(
                () =>
                setIndex((prevIndex) =>
                    prevIndex === bannerIphones.length - 1 ? 0 : prevIndex + 1
                    ),
            4000
            );
            return () => {
                resetTimeout();
            };
        }, [index]);
    

    return (
            <div className={cx('wrapper')}>
                <div
                    className={cx('slideshowSlider')}
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                {bannerIphones.map((banner, index) => 
                    <img key= {index} className={cx('background')} src={banner.images} alt='background' />
                    // <div key= {index} className={cx('backgrounds')} style={{backgroundImage : `url(${banner.images})`}}></div>
                )}
                </div>
                <div className={cx('slideshowDots')}>
                    {bannerIphones.map((_, idx) => (
                        <div
                            key={idx}
                            className={cx('slideshowDot',`${index === idx ? "active" : ""}`)}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
    );
}

export {BackgroundIphone}