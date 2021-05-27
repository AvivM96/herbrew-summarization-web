import React from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "./pages/home/home";
import Logo from "./components/logo/logo";
import Particles from "react-particles-js";
import {particlesConfig2} from "./components/welcome-message/particles-config2";

function App() {
    return (
        <div className="App relative flex justify-center h-screen">
            <HashRouter basename="/">
                <Switch>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Redirect to={{pathname: "/home"}} />
                </Switch>
            </HashRouter>
            <Logo className="absolute bottom-0 right-4" />
        </div>
    );
}

export default App;
