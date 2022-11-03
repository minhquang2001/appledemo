import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

function HeaderProduct({ children }) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HeaderProduct;
