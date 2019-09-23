import React from 'react';
import Dict from './../../../dictionary/es';
import NumberFormat from 'react-number-format';

export const PictureItem = ({ picture, title }) => {
    return (
        <div className="item-data-picture">
            <img src={picture} alt={title} />
        </div>
    )
}

export const ItemData = ({ item }) => {
    return (
        <div className="item-data">
            <p className='item-data-condition'>
                <span className="price-symbol">{Dict(item.condition)} - </span>
                <span className="price-amount"> {item.sold_quantity} {Dict('sold')}</span>
            </p>
            <p className="item-result-title">{item.title}</p>
            <p className='item-price'>
                <span className="item-price-symbol">{Dict(item.price.currency)}  </span>
                <span className="item-price-amount">
                <NumberFormat value={item.price.amount} decimalSeparator={','} displayType={'text'} thousandSeparator={'.'} renderText={value => (value)}/>                
                </span>
                <span className="item-price-decimals">{ item.price.decimal !== "00" ? item.price.decimals : ''}</span>
            </p>  
            <button> Comprar </button>
        </div>
    )
}

export const ItemDescription = ({ description }) => {
    return (
        <div className="item-data-description">
            <h2>{Dict('descripTitle')}</h2>
            <p>{ description ? description : Dict('noDecript')}</p>
        </div>
    );
}