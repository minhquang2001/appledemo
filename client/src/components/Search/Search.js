import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from "classnames/bind";
import styles from './Search.module.scss'
import {useDebounce} from 'src/hooks';
import * as searchApi  from 'src/services/searchApi';


const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [showResult, setShowResult] = useState(false)

    const debouncedValue = useDebounce(searchValue, 500)
    const searchActive = () => {
        setIsActive(true)
    }

    

    const searchClose = () => {
        setSearchValue('')
        setIsActive(false)
        setShowResult(false)
    }
    const handleHindResult = () => {
        setShowResult(false)
    }
    const handleClickResult = () => {
        setShowResult(false)
        setIsActive(false)
        setSearchValue('');
    }
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
     //render list product search demo
    

    useEffect(() => {
        if(!debouncedValue.trim()) {
            setSearchResult([])
            return;
        }

        const fetchApi = async () => {
            
            const result = await searchApi.search(debouncedValue)
            setSearchResult(result)

        }
        fetchApi()
    }, [debouncedValue])
    // toggle active search
    const active = isActive ? 'active' : ''
    const classes = cx('search-wrapper', { active })
    // console.log(searchResult)
    return (
    <>
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <div className={cx('grid')}>
                        {searchResult.map((result) =>
                            <Link to={`/search/${result.id}`} className={cx('wrapper-product')} key={result.id} onClick={handleClickResult}>
                                <img className={cx('image-product')} src={result.image} alt="" />
                                <div className={cx('wrapper-description')}>
                                    <div className={cx('product-name')}>{result.name}</div>
                                    <p className={cx('price-name')}>{(result.price).toLocaleString().concat('đ')}</p>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            )}
            onClickOutside={handleHindResult}
        >

            <div className={classes}>
                <div className={cx("input-holder")}>
                    <input
                        className={cx("search-input")}
                        type="text"
                        spellCheck="false"
                        placeholder="Bạn tìm gì..."
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    <button className={cx("search-icon")} onClick={searchActive}><span></span></button>
                </div>
                <span className={cx("close")} onClick={searchClose}></span>
            </div>
        </Tippy>
    </>)
}

export default Search