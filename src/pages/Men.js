import React from 'react';
import { Grid } from 'semantic-ui-react';
import Header from '../components/Header';
import MenBody from '../components/MenBody';
import Footer2 from '../components/Footer2';




function Product() {
    return (
        <React.Fragment>
            <div className="container">
                <Grid centered padded>
                    <Header />

                    <div className="fifteen wide column ui secondary basic segment">
                        <MenBody />
                    </div>
                    <Footer2 />
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Product;