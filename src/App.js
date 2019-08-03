import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Men from './pages/Men';
import { ProductProvider } from './components/ProductContext';
import './App.css';


function App() {


  return (
    <React.Fragment>
      <ProductProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/men" exact component={Men} />
            <Route path="/product" exact component={Product} />
          </Switch>
        </Router>
      </ProductProvider>
    </React.Fragment>
  );
}

export default App;
