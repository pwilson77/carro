import React from 'react';
import ProductShow from '../components/ProductShow';
import { Route, Switch } from 'react-router-dom';
import { ProductContext } from '../components/ProductContext';


class Product extends React.Component {
    static contextType = ProductContext;

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route
                        path="/products/:slug"
                        render={({ match }) => {
                            const product = this.context.products.find(g => g.id === parseInt(match.params.slug))
                            return <ProductShow product={product} />
                        }}
                    />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Product;

