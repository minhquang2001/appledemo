import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import ItemLoading from './ItemLoading';

const cx = classNames.bind(styles);
function PageLoading() {
    return (
        <>
            <div className={cx('wrap')}>
                <div className={cx('heading')}>
                    <Skeleton height={50} width={200} />
                </div>
                <div className={cx('background')}>
                    <Skeleton height={400} />
                </div>

                <div className={cx('grid wide')}>
                    <div className={cx('row wide')}>
                        <ItemLoading cards={8} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageLoading;
