import React, { useState, useEffect, useLayoutEffect } from 'react'
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


  const [index, setIndex] = useState(1);
  const [product, setProduct] = useState([]);
  const [productDetail, setProductDetail] = useState()

  // Set option product
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('')
  const [colorValue, setColorValue] = useState("green")
  const [ramValue, setRamValue] = useState(undefined)
  const [storageValue, setStorageValue] = useState("256GB")




  // const [productDetail, setProductDetail] = useState([])
  const location = useLocation()
  const productId = location.pathname.split('/')[2]
  const path = location.pathname
  console.log(productId, path)

  useEffect(() => {
    fetch(`https://api-uit.herokuapp.com/api/iphone/${productId}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setProductDetail(data.product_details)
        var dataFirst = data.product_details[0]
        var checkRam = dataFirst.ram !== undefined ? `${dataFirst.ram}` : undefined
        setRamValue(checkRam)
        setPrice(dataFirst.price)
        setImage(dataFirst.image)
        setColorValue(dataFirst.color)
      })
  }, [productId])
  const findColor = (color) => {
    setColorValue(color);

  }
  const findRam = (ram) => {
    setRamValue(ram);
  }
  const findStorage = (storage) => {
    setStorageValue(storage);
  }

  // console.log(productDetail)
  useLayoutEffect(() => {
    var target = productDetail && productDetail.find(item => {
      var ram = ramValue === undefined ? ramValue : `${ramValue}`;
      return (
        item.ram === ram &&
        item.color === `${colorValue}` &&
        item.storage === `${storageValue}`
      )
    })
    // console.log(target)
    var changeImage = target !== undefined ? (target.image) : image;
    var changePrice = target !== undefined ? (target.price) : price;
    setImage(changeImage)
    setPrice(changePrice)
    // console.log(result);
  }, [productDetail, ramValue, colorValue, storageValue, price, image])

  return (

    <div className={cx('wrap')}>
      <div className="grid wide">
        <div className="wide row">
          <div className="wide l-6 m-6 c-12" >
            <img className={cx('img-product')} src={(image)} alt={product.name} />
          </div>
          <div className="wide l-6 m-6 c-12">
            <div className={cx("wrap-heading")}>
              <div className={cx('heading')}>{product.name}</div>
              <div className={cx('separate')}></div>
              <div className={cx('price')}>{price}</div>

              {/* Check product have storage */}
              {product.option && product.option.map((option, idx) =>
              <div key={idx}>
                {(option.key === "storage" ?
  
                  <div className={cx('wrap-storage')}>
                    <div className={cx('storage-heading')}>Chọn {option.key}</div>
                    <div className={cx('wrap-option')}>
                      {option.value.map((value, idx) =>
                        <div className={cx('option', `${value === storageValue ? "active" : ""}`)}
                          key={idx}
                          value={value}
                          onClick={() => findStorage(value)}
                        >
                          {value}
                        </div>
                      )}
                    </div>
                  </div> : <></>)}
              </div>
              )}


              {/* Check product have ram */}
              {product.option && product.option.map((option, idx) =>
              <div key={idx}>
                {(option.key === "ram" ?
  
                  <div className={cx('wrap-storage')}>
                    <div className={cx('storage-heading')}>Chọn {option.key}</div>
                    <div className={cx('wrap-option')}>
                      {option.value.map((value, idx) =>
  
                        <div className={cx('option', `${value === ramValue ? "active" : ""}`)}
                          key={idx}
                          value={value}
                          onClick={() => findRam(value)}
                        >
                          {value}
                        </div>
                      )}
                    </div>
                  </div> : <></>)}
              </div>
              )}

              {/* Check product have color */}
              {product.option && product.option.map((option, idx) =>
              <div key={idx}>
                {(option.key === "color" ?
  
                  <div className={cx('wrap-color')}>
                    <div className={cx('heading-color')}>Chọn {option.key}</div>
                    <div className={cx('option-color')}>
                      {option.value.map((value, idx) =>
                        <div className={cx('space', `${value === colorValue ? "active" : ""}`)}
                          key={idx}
                          value={value}
                          onClick={() => findColor(value)}
                        >
                          <div className={cx('radio-color')} style={{ backgroundColor: value }}></div>
                        </div>
                      )}
                    </div>
                  </div> : <></>)}
              </div>
              )}


              <div className={cx('wrap-buy')}>
                <div className={cx('box-buy')}>
                  <div className={cx('buy-cash')}>MUA NGAY</div>
                </div>
                <div className={cx('box-buy')}>
                  <div className={cx('add-to-list')}>THÊM VÀO GIỎ HÀNG</div>
                </div>
              </div>


              <div className={cx('wrap-option-information')}>
                {product.services && product.services.map((service, index) =>
                (
                  <div className={cx('wrap-content')} key={index}>
                    <FontAwesomeIcon icon={faCircleCheck} className={cx('icon-check')} />
                    <p className={cx('content')}>{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>


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
                  >
                    {/* {tab.value} */}
                  </div>
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