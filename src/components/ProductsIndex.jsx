import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";




class ProductIndex extends React.Component {

    render() {

        const productItems = this.props.products.map(product => (

            <Card key={product.id}>
                <Image src={`/products/${product.sku}_1.jpg`} />
                <Card.Content textAlign="center" className="borderless">
                    <Card.Header>{product.description}</Card.Header>
                    <Link to={`/products/${product.id}`}>
                        <button className="purple-button2"> View Product </button>
                    </Link>
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

export default ProductIndex;