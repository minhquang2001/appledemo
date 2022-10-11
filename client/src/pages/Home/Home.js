import classNames from "classnames/bind";
import styles from "./Home.module.scss"
import ProductItems from "~/layouts/components/ProductItems";
const cx = classNames.bind(styles)
function Home() {
    return (
        <div className={cx('wrapper')} >
            <ProductItems />
        </div>
    );
}

export default Home;