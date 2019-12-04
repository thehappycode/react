import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function BasicExample(){
    return(
        <BrowserRouter>
            <div>
                <div><h2>https://reacttraining.com/react-router/web/example/basic</h2></div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">DashBoard</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <DashBoard />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

function Home(){
    return(
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About(){
    return(
        <div>
            <h2>About</h2>
        </div>
    );
}

function DashBoard(){
    return(
        <div>
            <h2>DashBoard</h2>
        </div>
    );
}