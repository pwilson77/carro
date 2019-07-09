import React from 'react';
import { Grid } from 'semantic-ui-react';
import Nav from '../components/Nav';
import ProductBody from '../components/ProductBody';
import Footer3 from '../components/Footer3';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: [], current_product_id: 0
        }

        this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
        this.handleRemoveItemFromCart = this.handleRemoveItemFromCart.bind(this);
    }

    handleAddToCart = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;

            cartItems.forEach(cp => {
                if (cp.id === product.id) {
                    cp.count += 1;
                    productAlreadyInCart = true;
                }
            });

            if (!productAlreadyInCart) {
                cartItems.push({ ...product, count: 1 });
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return { cartItems: cartItems };
        });
    }

    handleRemoveFromCart = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems.filter(a => a.id !== product.id);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return { cartItems: cartItems };
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">

                    <Grid centered padded>
                        <Nav />

                        <div className="ui grid centered padded" id="seg">
                            <ProductBody handleAddItemToCart={this.handleAddItemToCart} handleRemoveItemFromCart={this.handleRemoveItemFromCart} currentProduct={this.state.current_product_id} />

                        </div>

                        <Footer3 />

                    </Grid>

                </div>
            </React.Fragment>
        );
    }
}

export default Product;

