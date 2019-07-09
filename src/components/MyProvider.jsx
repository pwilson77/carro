import React, { useState } from 'react';

export const MyContext = React.createContext();

export const MyProvider = () => {
    const [products, listProducts] = usestate({
        products: [], filteredProducts: []
    });

    componentWillMount() {
        fetch("http://localhost:8000/products").then(res => res.json()).then(data => this.setState({
            products: data,
            filteredProducts: data
        }));
    }

    return (
        <MyContext.Provider value={{ state: this.state }}>
            {this.props.children}
        </MyContext.Provider>
    );
}

