import React, { useEffect, useState } from "react";
import Edit from "../../img/edit.png";
import Delete from "../../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
// import DOMPurify from "dompurify";
import classNames from "classnames/bind";
import styles from './Single.module.scss'

const cx = classNames.bind(styles)

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[3];
 console.log(postId)

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  const price = post.price?.toLocaleString().concat('đ')
  
  return (
    <div className={cx("single")}>
      <div className={cx("content")}>
      <div className={cx('img-product')} style={{backgroundImage: `url(${post.img})`}}></div>
        <div className={cx("user")}>
          {post.userImg && <img
            src={post.userImg}
            alt=""
          />}
          <div className={cx("info")}>
            <span>{post.username}</span> 
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className={cx("edit")}>
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h2>{post.name}</h2>
        <p>{getText(price)}</p>
             </div>
      <Menu cat={post.group}/>
    </div>
  );
};

export default Single;
