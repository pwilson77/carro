import React from 'react';
import { Grid } from 'semantic-ui-react';
import Nav from '../components/Nav';
import HomeBody from '../components/HomeBody';


function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <Grid centered padded>
                    <Nav />
                    <HomeBody />
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default Home;