import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Men from './pages/Men';
import { ProductProvider } from './components/ProductContext';
import './App.css';


function App() {


  return (
    <React.Fragment>
      <ProductProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/men" exact component={Men} />
          <Route path="/products" component={Product} />
        </Switch>
      </ProductProvider>
    </React.Fragment>
  );
}

export default App;
