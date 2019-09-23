import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ItemView from './../components/Item';
import {itemSearchUrl} from './../const/apiInfo';
import SearchContainer from './SearchContainer';

class itemContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: null,
            categories : null
        }
    }
    componentDidMount() {
        this.Fetch();
    }

    Fetch = () => {
        const { id } = this.props.match.params;
        const url = itemSearchUrl + id;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                item: data.item,
                categories : data.categories
            })
        });
    }

    render() {
        const { item, categories } = this.state;
        return (
        <div>
            <SearchContainer></SearchContainer>  
            {item && <ItemView item={item} categories={categories}></ItemView>}
        </div>
        )
    }
}

export default withRouter(itemContainer);