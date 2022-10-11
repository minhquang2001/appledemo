import React from "react";
import Logo from "../../img/logo.png";
import classNames from "classnames/bind";
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)
const Footer = () => {
  return (
    <footer>
      <img className={cx('image')} src={Logo} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
