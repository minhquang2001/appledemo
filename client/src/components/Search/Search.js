import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from "classnames/bind";
import styles from './Search.module.scss'
import {useDebounce} from 'src/hooks';
import * as searchApi  from 'src/services/searchApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [isActive, setIsActive] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const debouncedValue = useDebounce(searchValue, 500)
    const searchActive = () => {
        setIsActive(true)
    }

    

    const searchClose = () => {
        setSearchValue('')
        setError(false)
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
        if (searchValue === '') {
            setError(false)
        }
    };
     //render list product search demo
    

    useEffect(() => {
        if(!debouncedValue.trim()) {
            setSearchResult([])
            return;
        }
        
        const fetchApi = async () => {
            setLoading(true)
            setError(false)
            const result = await searchApi.search(debouncedValue)
            if (result.length === 0) {
                setError(true)
                setLoading(false)
            }
            else {
                setSearchResult(result)
                setError(false)
                setLoading(false)
            }
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
            visible={(showResult && loading) || (showResult && searchResult.length > 0) || (showResult && error)}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    {!loading && !error && (<div className={cx('grid')} style={{maxHeight: '500px'}}>
                        {searchResult.map((result) =>
                            <Link to={`/search/${result.id}`} className={cx('wrapper-product')} key={result.id} onClick={handleClickResult}>
                                <img className={cx('image-product')} src={result.image} alt="" />
                                <div className={cx('wrapper-description')}>
                                    <div className={cx('product-name')}>{result.name}</div>
                                    <p className={cx('price-name')}>{(result.price).toLocaleString().concat('đ')}</p>
                                </div>
                            </Link>
                        )}
                    </div>)}
                    {loading && <div className={cx('icon-loading')}>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    </div>}
                    {error && (
                            <div className={cx('text-error')}>
                                <p style={{fontSize: '1.6rem'}}>Không có kết quả phù hợp với "{searchValue}"</p>
                            </div>
                        )}
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