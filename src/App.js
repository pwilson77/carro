import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Men from './pages/Men';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = { products: [], filteredProducts: [] }

  componentWillMount() {
    fetch("http://localhost:8000/products").then(res => res.json()).then(data => this.setState({
      products: data,
      filteredProducts: data
    }));
  }


  render() {
    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

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
