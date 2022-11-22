import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);
function SingleLoading() {
    return (
        <>
            <div className={cx('card-skeleton')}>
                <div className={cx('left')}>
                    <Skeleton height={600} />
                </div>
                <div className={cx('right')}>
                    <Skeleton count={6} height={100} style={{ marginBottom: '16px' }} />
                </div>
            </div>
            <div className={cx('bottom')}>
                <Skeleton height={300}/>
            </div>
        </>
    );
}

export default SingleLoading;
