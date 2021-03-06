import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import login from "./components/login/login";
import home from "./components/home/home";
import test_api from "./components/test_api/test_api"

const Error = () => {
    return (
        <div>
            <p>Error</p>
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/" component={login} exact />
                <Route path="/home" component={home} exact />
                <Route path="/test-api" component={test_api} exact />
                <Route component={Error} />
            </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
