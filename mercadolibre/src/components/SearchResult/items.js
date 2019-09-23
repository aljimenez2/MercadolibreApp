import React from 'react';
import { item } from '../../const/apiInfo';
import ItemDiv from './itemDiv';

const mappingItems = items => {
    return items.map((item) => (
        <ItemDiv item={item}></ItemDiv>
    ));
}

const ItemsDiv = ({items}) => {
    return (
        
        <div>
            {mappingItems(items)}
        </div>
    );
};

export default ItemsDiv;