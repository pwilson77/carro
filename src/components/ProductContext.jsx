import React from 'react';
import axios from 'axios';

export const ProductContext = React.createContext();

export class ProductProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            products: [],
            filteredProducts: [],
            status: "initial"
        }
        this.updateProducts = this.updateProducts.bind(this)

    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = async term => {
        this.setState({ term });
        const response = await axios.get("http://localhost:8000/products");
        this.setState({
            status: "done",
            filteredProducts: response.data,
            products: response.data
        })
    }

    updateProducts(val) {
        this.setState({ filteredProducts: val });
    }

    render() {
        return (
            <ProductContext.Provider value={{ ...this.state, updateProducts: this.updateProducts }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }

}

