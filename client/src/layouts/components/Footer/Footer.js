import { Link } from 'react-router-dom'
import { useState } from 'react';

import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import styles from "./Footer.module.scss"
import config from "~/config";
import images from "~/assets/images";
// import { SidebarData } from './FooterBarMobile';
import { faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)


function Footer() {
    const [subnav1, setSubnav1] = useState(false)
    const showSubnav1 = () => {
        setSubnav1(!subnav1)
    }

    const [subnav2, setSubnav2] = useState(false)
    const showSubnav2 = () => {
        setSubnav2(!subnav2)
    }

    const [subnav3, setSubnav3] = useState(false)
    const showSubnav3 = () => {
        setSubnav3(!subnav3)
    }

    const [subnav4, setSubnav4] = useState(false)
    const showSubnav4 = () => {
        setSubnav4(!subnav4)
    }

    // const [subnav, setSubnav] = useState(false);

    // const showSubnav = () => setSubnav(!subnav);

    const animate1 = subnav1 ? 'animate' : ''
    const animate2 = subnav2 ? 'animate' : ''
    const animate3 = subnav3 ? 'animate' : ''
    const animate4 = subnav4 ? 'animate' : ''

    const classes1 = cx('wrap__column-footer',  animate1 )
    const classes2 = cx('wrap__column-footer',  animate2 )
    const classes3 = cx('wrap__column-footer',  animate3 )
    const classes4 = cx('wrap__column-footer',  animate4 )


    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('row wide')}>
                    <div className={cx('wide l-4 m-12 c-12')}>
                        <div className={cx('wrap-logo')}>
                            <Link to={config.routes.home} className={cx('logo-link')}>
                                <img src={images.logo} alt='Logo' className={cx('img-logo')} />
                            </Link>
                            <div className={cx('text')}>Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng Việt Nam.</div>
                            <div className={cx('wrap-icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wide l-2 m-3 c-0')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')}>
                                <ul className={cx('heading')}>Sản phẩm</ul>

                            </div>
                            <div className={cx('wrap__column-footer')}>
                                <Link to='' className={cx('information')}>iPhone</Link><br />
                                <Link to='' className={cx('information')}>iPad</Link><br />
                                <Link to='' className={cx('information')}>Mac</Link><br />
                                <Link to='' className={cx('information')}>Apple Watch</Link><br />
                                <Link to='' className={cx('information')}>Âm thanh</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wide l-2 m-3 c-0')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')}>
                                <ul className={cx('heading')}>Thông tin</ul>

                            </div>
                            <div className={cx('wrap__column-footer')}>
                                <Link to='' className={cx('information')}>Giới thiệu</Link><br />
                                <Link to='' className={cx('information')}>Khuyến mãi</Link><br />
                                <Link to='' className={cx('information')}>Bảo hành và sửa chữa</Link><br />
                                <Link to='' className={cx('information')}>Tuyển dụng</Link><br />
                                <Link to='' className={cx('information')}>Tin tức</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wide l-2 m-3 c-0')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')}>
                                <ul className={cx('heading')}>Chính sách</ul>

                            </div>
                            <div className={cx('wrap__column-footer')}>
                                <Link to='' className={cx('information')}>Trả góp</Link><br />
                                <Link to='' className={cx('information')}>Giao hàng</Link><br />
                                <Link to='' className={cx('information')}>Đổi trả</Link><br />
                                <Link to='' className={cx('information')}>Bảo hành</Link><br />
                                <Link to='' className={cx('information')}>Hủy giao dịch</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('wide l-2 m-3 c-0')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')}>
                                <ul className={cx('heading')}>Liên hệ</ul>

                            </div>
                            <div className={cx('wrap__column-footer')}>
                                <div><span className={cx('information-call')}>Mua hàng:</span><span className={cx('call')}>113</span></div>
                                <div><span className={cx('information-call')}>Khiếu nại:</span><span className={cx('call')}>114</span></div>
                                <div><span className={cx('information-call')}>Đối tác và Doanh nghiệp:</span><span className={cx('call')}>115</span></div>
                                <img className={cx('bocongthuong')} src={images.bocongthuong} alt="bocongthuong" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile */}

                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')} onClick={showSubnav1}>
                                <ul className={cx('heading')}>Sản phẩm</ul>
                                <div className={cx('icon')}>
                                    {subnav1 && (<FontAwesomeIcon icon={faSortUp} />)}
                                    {!subnav1 && (<FontAwesomeIcon icon={faSortDown} />)}
                                </div>
                            </div>
                            <div className={classes1}>
                                <Link to='' className={cx('information')}>iPhone</Link><br />
                                <Link to='' className={cx('information')}>iPad</Link><br />
                                <Link to='' className={cx('information')}>Mac</Link><br />
                                <Link to='' className={cx('information')}>Apple Watch</Link><br />
                                <Link to='' className={cx('information')}>Âm thanh</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')} onClick={showSubnav2}>
                                <ul className={cx('heading')}>Thông tin</ul>
                                <div className={cx('icon')}>
                                    {subnav2 && (<FontAwesomeIcon icon={faSortUp} />)}
                                    {!subnav2 && (<FontAwesomeIcon icon={faSortDown} />)}
                                </div>
                            </div>
                            <div className={classes2}>
                                <Link to='' className={cx('information')}>Giới thiệu</Link><br />
                                <Link to='' className={cx('information')}>Khuyến mãi</Link><br />
                                <Link to='' className={cx('information')}>Bảo hành và sửa chữa</Link><br />
                                <Link to='' className={cx('information')}>Tuyển dụng</Link><br />
                                <Link to='' className={cx('information')}>Tin tức</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')} onClick={showSubnav3}>
                                <ul className={cx('heading')}>Chính sách</ul>
                                <div className={cx('icon')}>
                                    {subnav3 && (<FontAwesomeIcon icon={faSortUp} />)}
                                    {!subnav3 && (<FontAwesomeIcon icon={faSortDown} />)}
                                </div>
                            </div>
                            <div className={classes3}>
                                <Link to='' className={cx('information')}>Trả góp</Link><br />
                                <Link to='' className={cx('information')}>Giao hàng</Link><br />
                                <Link to='' className={cx('information')}>Đổi trả</Link><br />
                                <Link to='' className={cx('information')}>Bảo hành</Link><br />
                                <Link to='' className={cx('information')}>Hủy giao dịch</Link><br />
                            </div>
                        </div>
                    </div>
                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            <div className={cx('wrap-heading')} onClick={showSubnav4}>
                                <ul className={cx('heading')}>Liên hệ</ul>
                                <div className={cx('icon')}>
                                    {subnav4 && (<FontAwesomeIcon icon={faSortUp} />)}
                                    {!subnav4 && (<FontAwesomeIcon icon={faSortDown} />)}
                                </div>
                            </div>
                            <div className={classes4}>
                                <div><span className={cx('information-call')}>Mua hàng:</span><span className={cx('call')}>113</span></div>
                                <div><span className={cx('information-call')}>Khiếu nại:</span><span className={cx('call')}>114</span></div>
                                <div><span className={cx('information-call')}>Đối tác và Doanh nghiệp:</span><span className={cx('call')}>115</span></div>

                            </div>
                        </div>
                    </div>
                    <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-contact')}>
                            <div className={cx('wrap-bocongthuong')}>
                                <img className={cx('bocongthuong')} src={images.bocongthuong} alt="bocongthuong" />
                            </div>
                            <div className={cx('wrap-icon')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faFacebook} />
                                <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                <FontAwesomeIcon className={cx('icon')} icon={faTiktok} />
                            </div>
                        </div>
                    </div>





                    {/* <div className={cx('l-0 m-0 c-12')}>
                        <div className={cx('wrap-content')}>
                            {SidebarData.map((item, index) => 
                                
                                    <div key={index}>
                                        <div className={cx('wrap-heading')} onClick={item.subNav && showSubnav}>
                                            <div className={cx('heading')}>
                                                 {item.title}
                                            </div>
                                            <div className={cx('icon')}>
                                                 <div>
                                                     {item.subNav && subnav
                                                         ? item.iconOpened
                                                         : item.subNav
                                                         ? item.iconClosed
                                                         : null}
                                                 </div>
                                            </div>
                                            <div className={cx('wrap__column-footer')}>
                                                {subnav && item.subNav.map((items, index) => {
                                                    return (
                                                        <>
                                                            <div className="wrap" key={index}> 
                                                                <Link to={items.path} className={cx('information')} >{items.title}</Link><br />
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                             </div>
                                        </div>         
                                    </div>
                                
                            )}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;