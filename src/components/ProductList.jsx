import React from 'react';
import { Card, Image } from 'semantic-ui-react';


class ProductList extends React.Component {

    render() {
        const productItems = this.props.products.map(product => (

            <Card key={product.id}>
                <Image src={`/products/${product.sku}_1.jpg`} />
                <Card.Content textAlign="center" className="borderless">
                    <Card.Header>{product.description}</Card.Header>
                    <button className="purple-button2" onClick={(e) => this.props.handleAddToCart(e, product)} > View Product </button>
                </Card.Content>
            </Card>
        )
        )

        return (
            <React.Fragment>
                <Card.Group itemsPerRow={3}>
                    {productItems}

                </Card.Group>
            </React.Fragment>
        );
    }
}

export default ProductList;