import React from 'react';
import './App.scss';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home/home";
import AppFooter from "./components/app-footer/app-footer";
import {observer} from "mobx-react-lite";
import Result from "./pages/result/result";

const App: React.FC = () => {
    return (
        <div className="App relative flex justify-center h-screen mb-24">
            <HashRouter basename="/">
                <Switch>
                    <Route path="/home">
                        <HomePage />
                    </Route>

                    <Route path="/result/:uuid">
                        <Result />
                    </Route>
                    <Redirect to={{pathname: "/home"}} />
                </Switch>
            </HashRouter>
            <AppFooter />
        </div>
    );
}

export default observer(App);
