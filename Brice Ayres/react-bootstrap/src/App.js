import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Home,
  About,
  Contact,
  NoMatch
} from './page';
import {
  NavigationBar,
  Layout,
  Jumbotron
} from './components';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
        <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
