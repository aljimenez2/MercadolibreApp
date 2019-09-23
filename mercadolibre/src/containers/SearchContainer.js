import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { withRouter } from 'react-router-dom';

class SearchContainer extends Component {
    render() {
        return ( 
            <SearchBar></SearchBar>   
        )
    }
}

export default withRouter(SearchContainer);