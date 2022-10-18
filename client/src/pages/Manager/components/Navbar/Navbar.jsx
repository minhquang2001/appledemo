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
          <Link className={cx("link")} to="/manager/?cat=iphone">
            <h6>IPHONE</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=ipad">
            <h6>IPAD</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=macbook">
            <h6>MACBOOK</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=watch">
            <h6>WATCH</h6>
          </Link>
          <Link className={cx("link")} to="/manager/?cat=sound">
            <h6>ÂM THANH</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (<>
            <span onClick={logout}>
              <Link className={cx("link")} to="/manager">
              Logout
            </Link></span>
            <span className={cx("write")}>
            <Link className={cx("link")} to="/write">
              Write
            </Link>
          </span></>
          ) : (
            <Link className={cx("link")} to="/manager/login">
              Login
            </Link>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
