import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';
import ArticleList from "./component/ArticleList";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={ArticleList} />
                    <Route path="/editForm" component={EditForm} />
                   </Switch>
            </Router>
        )
    }
}