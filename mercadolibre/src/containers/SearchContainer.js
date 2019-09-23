import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { withRouter, Link } from 'react-router-dom';

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleOnChange = e => {
        e.preventDefault();
        this.setState({
            query: e.target.value
        });
    }
    
    render(){
        let url = `/items?search=${this.state.query}`;
        return ( 
            <SearchBar url={url} onHandleOnChange={this.handleOnChange} query={this.state.query}></SearchBar>   
        )
    }
}

export default withRouter(SearchContainer);