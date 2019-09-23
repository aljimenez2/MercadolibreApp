import React, { Component } from 'react';
import SearchResult from './../components/SearchResult';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { itemsSearchUrl } from './../const/apiInfo';
import SearchContainer from './SearchContainer';

class itemResults extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: null,
            query: null,
            categories: null
        }
    }

    componentDidMount(){
        this.handleFetch();
    }

    componentDidUpdate(){
        const values = queryString.parse(this.props.location.search);
        const querySearch = values.search;
        if(this.state.query !== querySearch){
            this.handleFetch();
        }
    }

    handleFetch = () => {
        const values = queryString.parse(this.props.location.search);
        const querySearch = values.search;
        this.setState({
            query: querySearch
        });
        this.Fetch(querySearch);
    }

    Fetch = (query) => {
        fetch(itemsSearchUrl + query)
        .then(res => res.json())
        .then(data => {
            this.setState({
                items: data.items,
                categories: data.categories
            })
        });
    };

    render(){
        const { items, categories } = this.state;
        return (
            <div>
                <SearchContainer></SearchContainer>  
                {items && 
                <SearchResult items={items} categories={categories}></SearchResult>}
            </div>
        )
    }
}

export default withRouter(itemResults);