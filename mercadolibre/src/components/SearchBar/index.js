import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            redirect: false
        }
    }

    handleOnChange = query => {
        this.setState({
            query,
            redirect: false
        });
    }

    onHandleSubmit = e => {
        e.preventDefault();
        this.setState({
            redirect: true
        });
    }

    renderRedirect = () => {
        let url = `/items?search=${this.state.query}`;
        const {query, redirect} = this.state;
        if (redirect && query.length !== 0) {
            return <Redirect to={url} />
        } 
    }
    

    render(){
        let url = `/items?search=${this.state.query}`;
        const {query} = this.state;
        return (
            <div className="navBar"> 
                {
                query.length !== 0 ? this.renderRedirect() : null
                }
                <div className='navBarSearchBar'>
                    <Link to={'/'} >
                        <img src="https://bit.ly/2Sg0khu" className='navbar-logo' alt="Mercadolibre logo"/>
                    </Link>
                    <form onSubmit={this.onHandleSubmit}>
                        <input className="navSearchBar" type="text" onChange={e => { e.preventDefault(); this.handleOnChange(e.target.value)}} name='query'/>
                        {
                            query 
                            ? 
                            <Link to={url} >
                                <button className="navSearchBtn">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </Link>
                            :
                            <button className="navSearchBtn">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        }
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
