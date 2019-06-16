import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Men from './pages/Men';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/men" exact component={Men} />
          <Route path="/product" exact component={Product} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
