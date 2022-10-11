import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import styles from './BackgroundProduct.module.scss';
import { bannerIpads } from "~/assets/data/banner";

const cx = classNames.bind(styles)
function BackgroundIpad() {
    
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
                    prevIndex === bannerIpads.length - 1 ? 0 : prevIndex + 1
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
                {bannerIpads.map((banner, index) => 
                    <img key= {index} className={cx('background')} src={banner.images} alt='background' />
    
                )}
                </div>
                <div className={cx('slideshowDots')}>
                    {bannerIpads.map((_, idx) => (
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

export {BackgroundIpad};