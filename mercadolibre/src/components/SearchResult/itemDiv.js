import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { PictureItem, ItemData} from './partials';



class ItemDiv extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirect : false,
        }
    }
    handleOnClick = e => {
        e.preventDefault();
        this.setState({redirect: true});
    }
    
    render() {
        const { item } = this.props;
        const redirect = `/item/${item.id}`;

        console.log(item.picture);

        if (this.state.redirect) {
            return <Redirect push to={redirect} />;
        }

        return (
            <div key={item.id} onClick={this.handleOnClick} className="singular-item-result">
                <PictureItem picture={item.picture}></PictureItem>
                <ItemData item={item}></ItemData>
            </div>
        );
    };
}

export default ItemDiv;