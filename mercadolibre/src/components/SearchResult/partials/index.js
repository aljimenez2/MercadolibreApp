import React from 'react';
import Dict from './../../../dictionary/es';
import NumberFormat from 'react-number-format';

export const PictureItem = ({ picture }) => {
    console.log('Picture', picture);
    return (
        <div className="item-result-picture">
            <img src={picture} />
        </div>
    )
}

export const ItemData = ({ item }) => {
    return (
        <div className="item-result-data">
            <p className='price'>
                <span className="price-symbol">{Dict(item.price.currency)}  </span>
                <span className="price-amount">
                <NumberFormat value={item.price.amount} decimalSeparator={','} displayType={'text'} thousandSeparator={'.'} renderText={value => (value)}/>                
                </span>
                <span className="price-decimals">{ item.price.decimals !== 0 ? item.price.decimals : null}</span>
            </p>  
            <p className="item-result-title">{item.title}</p> 
        </div>
    )
}