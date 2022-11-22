import classNames from "classnames/bind";
import styles from "./Home.module.scss"
import ProductItems from "~/layouts/components/ProductItems";
import Background from '~/layouts/components/Background';


const cx = classNames.bind(styles)
function Home() {
    return (
        <div className={cx('wrapper')} >
            <Background />
            <ProductItems />
        </div>
    );
}

export default Home;