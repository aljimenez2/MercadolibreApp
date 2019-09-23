import React from 'react';
import ItemDiv from './itemDiv';

const mappingItems = items => {
    return items.map((item) => (
        <ItemDiv item={item} key={item.id}></ItemDiv>
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