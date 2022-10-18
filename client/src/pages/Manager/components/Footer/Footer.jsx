import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/logo.png";
import classNames from "classnames/bind";
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)
const Footer = () => {
  return (
    <footer>
      <img className={cx('image')} src={Logo} alt="" />
      <Link className={cx("link")} to="/">
          <h2>BACK TO SHOP HOME</h2>
      </Link>
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
