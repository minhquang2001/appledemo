import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Logo from "../../img/logo.png";
import classNames from "classnames/bind";
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className={cx("navbar")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>
          <Link to="/manager">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className={cx("links")}>
          <Link className={cx("link")} to="/manager/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className={cx("link")} to="/manager/login">
              Login
            </Link>
          )}
          <span className={cx("write")}>
            <Link className={cx("link")} to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
