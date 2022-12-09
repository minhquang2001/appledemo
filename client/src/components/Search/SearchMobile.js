import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from "classnames/bind";
import styles from './Search.module.scss'
import {useDebounce} from 'src/hooks';
import * as searchApi  from 'src/services/searchApi';


const cx = classNames.bind(styles)

function SearchMobile() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const inputRef = useRef()
    const debouncedValue = useDebounce(searchValue, 500)



    const handleClear = () => {
        setSearchValue('');
        setError(false)
        setSearchResult([]);
        inputRef.current.focus();
    };


    const handleHindResult = () => {
        setShowResult(false)
    }
    const handleClickResult = () => {
        setShowResult(false)
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
            setLoading(true)
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
    return (
        <>
            <Tippy
                interactive
                visible={(showResult && searchResult.length > 0) || (showResult && error) }
                render={attrs => (
                    <div className={cx('search-result-2')} tabIndex="-1" {...attrs}>
                        {!error && (<div className={cx('wrap-tippy-mobile')} style={{maxHeight: '275px'}}>
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
                        {error && (
                            <div className={cx('text-error')}>
                                <p>Không có kết quả phù hợp với "{searchValue}"</p>
                            </div>
                        )}
                    </div>
                )}
                onClickOutside={handleHindResult}
            >
                <div className={cx("wrap-search")}>
                    <form>
                        <input
                            className={cx("search")}
                            ref={inputRef}
                            type="text"
                            spellCheck="false"
                            placeholder="Bạn tìm gì..."
                            value={searchValue}
                            onChange={handleChange}
                            onFocus={() => setShowResult(true)}
                        />
                    </form>
                    {searchValue && !loading && (<div className={cx('icon-xmark')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>)}
                    {loading && (
                        <div className={cx('icon-loading-mobile')}>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        </div>
                    )}
                    <div className={cx('icon-search')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </Tippy>
        </>)
}

export default SearchMobile