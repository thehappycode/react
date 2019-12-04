import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>Home!</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: "/bubblegum",
        exact: true,
        sidebar: () => <div>Bubblegum!!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/shoelaces",
        exact: true,
        sidebar: () => <div>Shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
];

export default function SidebarExample(){
    return(
        <BrowserRouter>
            <div style={{display: "flex"}}>
                <div style={{
                    padding: "10px",
                    width: "40%",
                    background: "#f0f0f0"
                }}>
                   <ul style={{listStyleType: "none", padding: 0}}>
                        <li>
                            <Link to="/">Link - Home</Link>
                        </li>
                        <li>
                            <Link to="/bubblegum">Link - Bubblegum</Link>
                        </li>
                        <li>
                            <Link to="/shoelaces">Link - Shoelaces</Link>
                        </li>
                    </ul>
                    <Switch>
                        {routes.map((route, index) =>(
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>     
                </div>
                <div style={{flex: 1, padding: "10px"}}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}