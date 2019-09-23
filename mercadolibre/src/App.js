import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchContainer from './containers/SearchContainer';
import itemResults from './containers/itemResults';
import itemContainer from './containers/itemContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={SearchContainer} />
                    <Switch>
                        <Route exact path="/items" component={itemResults} />
                    </Switch>
                    <Route exact path="/item/:id" component={itemContainer} />
                </div>
            </Router>
        );
    }
}

export default App;
