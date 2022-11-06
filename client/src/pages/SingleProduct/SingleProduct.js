import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import classNames from 'classnames/bind'


import styles from './SingleProduct.module.scss'
import { Overview, Specification } from '~/components/OptionProduct'
const cx = classNames.bind(styles)
function SingleProduct() {
  const tabs = [
    {
      id: 1,
      heading: 'Mô tả',
      value: <Overview />
    },
    {
      id: 2,
      heading: 'Thông số kỹ thuật',
      value: <Specification />
    }
  ]
  const [index, setIndex] = useState(1)
  const [product, setProduct] = useState({});
  const [idx, setIdx] = useState(0)
  const [indexImage, setIndexImage] = useState(0)


  const location = useLocation()

  const productId = location.pathname.split('/')[2]
  const path = location.pathname
  console.log(productId, path)
  useEffect(() => {
    fetch(`https://api-uit.herokuapp.com/api/${path}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
      })
  }, [path])

  console.log(product)
  return (
    <div className={cx('wrap')}>
      <div className="grid wide">
        <div className="wide row">
          {/* <div className="wide l-6 m-6 c-12">
            <img className={cx('img-product')} src={img} alt="anh" />
          </div>
          <div className="wide l-6 m-6 c-12">
            <div className={cx("wrap-heading")}>
              <div className={cx('heading')}>iPhone 14 Pro Max 128GB</div>
              <div className={cx('separate')}></div>
              <div className={cx('price')}>32.490.000d</div>
              <div className={cx('wrap-storage')}>
                <div className={cx('storage-heading')}>Chọn dung lượng</div>
                <div className={cx('wrap-option')}>
                  <div className={cx('option', 'active')}>128GB</div>
                  <div className={cx('option')}>256GB</div>
                </div>
              </div>


              <div className={cx('wrap-color')}>
                <div className={cx('heading-color')}>Chọn màu</div>
                <div className={cx('option-color')}>
                  <div className={cx('space', 'active')}>
                    <div className={cx('purple', 'radio-color')}></div>
                  </div>
                  <div className={cx('space')}>
                    <div className={cx('gray', 'radio-color')}></div>
                  </div>
                  <div className={cx('space')}>
                    <div className={cx('gold', 'radio-color')}></div>
                  </div>
                </div>
              </div>


              <div className={cx('wrap-buy')}>
                <div className={cx('box-buy')}>
                  <div className={cx('buy-cash')}>MUA NGAY</div>
                </div>
                <div className={cx('box-buy')}>
                  <div className={cx('add-to-list')}>THÊM VÀO GIỎ HÀNG</div>
                </div>
              </div>


              <div className={cx('wrap-option-information')}>
                <div className={cx('wrap-content')}>
                  <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                  <p className={cx('content')}>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C</p>
                </div>
                <div className={cx('wrap-content')}>
                  <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                  <p className={cx('content')}>Bảo hành chính hãng 1 năm</p>
                </div>
                <div className={cx('wrap-content')}>
                  <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                  <p className={cx('content')}>Giao hàng nhanh toàn quốc</p>
                </div>
                <div className={cx('wrap-content')}>
                  <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                  <p className={cx('content')}>Gọi đặt mua 1900.6626 (7:30 - 22:00)</p>
                </div>
              </div>
            </div>
          </div> */}




          {/* {product.map((iphone) =>  */}

          <>
            <div className="wide l-6 m-6 c-12">

              <img className={cx('img-product')} src={product.imageProfile && product.imageProfile[indexImage]} alt={product.name} />
            </div>
            <div className="wide l-6 m-6 c-12">
              <div className={cx("wrap-heading")}>
                <div className={cx('heading')}>{product.name}</div>
                <div className={cx('separate')}></div>
                <div className={cx('price')}>{product.price && product.price[idx]}</div>
                <div className={cx('wrap-storage')}>
                  <div className={cx('storage-heading')}>Chọn dung lượng</div>
                  <div className={cx('wrap-option')}>
                    {product.storage && product.storage.map((option, index) =>
                    (
                      <div className={cx('option', `${idx === index ? "active" : ""}`)}
                        key={index}
                        onClick={() => setIdx(index)}
                      >{option}
                      </div>)
                    )}
                  </div>
                </div>


                <div className={cx('wrap-color')}>
                  <div className={cx('heading-color')}>Chọn màu</div>
                  <div className={cx('option-color')}>
                    {product.color && product.color.map((color, index) =>
                    (
                      <div className={cx('space', `${indexImage === index ? "active" : ""}`)}
                        key={index}
                        onClick={() => setIndexImage(index)}>
                        <div className={cx('radio-color')} style={{ backgroundColor: color }}></div>
                      </div>
                    )
                    )}
                  </div>
                </div>


                <div className={cx('wrap-buy')}>
                  <div className={cx('box-buy')}>
                    <div className={cx('buy-cash')}>MUA NGAY</div>
                  </div>
                  <div className={cx('box-buy')}>
                    <div className={cx('add-to-list')}>THÊM VÀO GIỎ HÀNG</div>
                  </div>
                </div>


                <div className={cx('wrap-option-information')}>
                  <div className={cx('wrap-content')}>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                    <p className={cx('content')}>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C</p>
                  </div>
                  <div className={cx('wrap-content')}>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                    <p className={cx('content')}>Bảo hành chính hãng 1 năm</p>
                  </div>
                  <div className={cx('wrap-content')}>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                    <p className={cx('content')}>Giao hàng nhanh toàn quốc</p>
                  </div>
                  <div className={cx('wrap-content')}>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                    <p className={cx('content')}>Gọi đặt mua 1900.6626 (7:30 - 22:00)</p>
                  </div>
                </div>
              </div>
            </div>
          </>
          {/* )} */}








        </div>
        <div className={cx("wrap-information")}>
          <div className={cx("wrap-heading")}>
            {tabs.map((tab) => (
              <div key={tab.id} className={cx("heading", `${index === tab.id ? "active" : ""}`)} onClick={() => { setIndex(tab.id) }}>{tab.heading}</div>
            ))}
          </div>
          <div className={cx("wrap-content")}>
            <div className={cx('padding-content')}>
              <div className={cx('information-center')}>
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={cx('tab', `${index === tab.id ? "active" : ""}`)}
                  >{tab.value}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct