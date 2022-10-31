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
    
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Background />
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
