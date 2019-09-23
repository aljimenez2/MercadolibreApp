import React, { Component } from 'react';
import { PictureItem, ItemData, ItemDescription} from './partials';
import './style.scss';



class ItemView extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: null,
            categories: null
        }
    }

    render() {
        const { item } = this.props;
        return (
            <div className="item-data-cont">
                <PictureItem picture={item.picture} title={item.title}></PictureItem>
                <ItemData item={item}></ItemData>
                <ItemDescription description={item.description}></ItemDescription>
            </div>
        )
    }
}

export default ItemView;
