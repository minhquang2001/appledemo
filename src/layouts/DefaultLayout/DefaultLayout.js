import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { useEffect, useState } from 'react';

import Header from '~/layouts/components/Header';
import Background from '~/layouts/components/Background';
import Footer from '~/layouts/components/Footer'
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    // const [showGoToTop, setShowGoToTop] = useState(false)

    // useEffect (() => {

    //     const handleScroll = () => {
    //         if(window.scrollY >= 350) {
    //             setShowGoToTop(true)
    //         } else {
    //             setShowGoToTop(false)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])

    // function handleTop() {
    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Background />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
            {/* {showGoToTop && (
            <div className={cx('button__arrow-top')} onClick={handleTop}>
                <FontAwesomeIcon icon={faArrowUp}/>
            </div>
            )} */}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
