import React from 'react';
import { Grid } from 'semantic-ui-react';
import Header from '../components/Header';
import ProductBody from '../components/ProductBody';
import Footer3 from '../components/Footer3';


function Product() {
    return (
        <React.Fragment>
            <div className="container">

                <Grid centered padded>
                    <Header />

                    <div className="ui grid centered padded" id="seg">
                        <ProductBody />

                    </div>

                    <Footer3 />

                </Grid>

            </div>
        </React.Fragment>
    );
}

export default Product;