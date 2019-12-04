import React from "react";
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";

export default function NoMatchExample(){
    return(
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/old-match">Old Match, to be redirected</Link>
                    </li>
                    <li>
                        <Link to="/will-match">Will Match</Link>
                    </li>
                    <li>
                        <Link to="/will-not-match">Will Not Match</Link>
                    </li>
                    <li>
                        <Link to="/also/will/not/match">Aslo Will Not Match</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/old-match">
                    <Redirect to="/will-match" />
                </Route>
                <Route path="/will-match">
                    <WillMatch />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

function Home(){
    return <h3>Home</h3>
}

function WillMatch(){
    return <h3>Matched!</h3>
}

function NoMatch(){
    let location = useLocation();

    return (
        <div>
            <h3>
                No Match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}