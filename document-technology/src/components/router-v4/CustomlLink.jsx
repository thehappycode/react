import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';

export default function CustomLinkExample(){
    return(
        <BrowserRouter>
            <div>
                <OldSchoolMenuLink 
                    activeOnlyWhenExact={true}
                    to="/"
                    label="Home"
                />
                <OldSchoolMenuLink 
                    to="/about"
                    label="About"
                />
                <hr />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

function OldSchoolMenuLink({activeOnlyWhenExact, to, label}){
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <div className={match?"active": ""}>
            {match && "> "}
            <Link to={to}>{label}</Link>
        </div>
    );
}

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }