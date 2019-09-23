import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

const SearchBar = ({url, onHandleOnChange, query}) => {
    return (
        <div className="navBar"> 
            <div className='navBarSearchBar'>
                <Link to={'/'} >
                    <img src="https://bit.ly/2Sg0khu" className='navbar-logo' />
                </Link>
                <input className="navSearchBar" type="text" onChange={onHandleOnChange} name='query'/>
                {
                    query 
                    ? 
                    <Link to={url} >
                        <button className="navSearchBtn">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </Link>
                    :
                    <button className="navSearchBtn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                }
            </div>
        </div>
    );
}

export default SearchBar;
