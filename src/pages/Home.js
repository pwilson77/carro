import React from 'react';
import { Grid } from 'semantic-ui-react';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';


function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <Grid centered padded>
                    <Header />
                    <HomeBody />
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Home;