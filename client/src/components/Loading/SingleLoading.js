import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);
function SingleLoading() {
    return (
        <>
            <div className={cx('card-skeleton grid wide')} style={{paddingTop: '60px'}}>

                <div className='row'>
                    <div className={cx('img-loading')}>
                        <Skeleton height={600} />
                    </div>
                    <div className={cx('information-loading')}>
                        <Skeleton count={6} height={100} style={{ marginBottom: '16px' }} />
                    </div>

                </div>
            </div>
            <div className={cx('bottom')}>
                <Skeleton height={300}/>
            </div>
        </>
    );
}

export default SingleLoading;
