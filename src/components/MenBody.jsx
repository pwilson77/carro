import React from 'react';
import { Grid, Header, List, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class MenBody extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Grid centered padded>
                    <Grid.Row>
                        <Grid.Column width={16} className="hero-image2">
                            <Grid className="hero-image2-content">
                                <Grid.Row padded>
                                    <Header as='h1'>Men's Wear</Header>
                                </Grid.Row>
                                <Grid.Row padded columns={3}>
                                    <Grid.Column>
                                        <List link>
                                            <List.Item active>Home</List.Item>
                                            <List.Item as='a'>About</List.Item>
                                            <List.Item as='a'>Jobs</List.Item>
                                            <List.Item as='a'>Team</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <List link>
                                            <List.Item active>Home</List.Item>
                                            <List.Item as='a'>About</List.Item>
                                            <List.Item as='a'>Jobs</List.Item>
                                            <List.Item as='a'>Team</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <List link>
                                            <List.Item active>Home</List.Item>
                                            <List.Item as='a'>About</List.Item>
                                            <List.Item as='a'>Jobs</List.Item>
                                            <List.Item as='a'>Team</List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row padded className="items-container">
                        <Grid.Column width={4}>

                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Card.Group itemsPerRow={3}>
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt12.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt8.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt11.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt14.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt3.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt5.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Card.Group itemsPerRow={3}>
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt12.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt12.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                                <Card
                                    href='/product'
                                    image={require('../assets/Images/images-shirt12.png')}
                                    header='Matt Giampietro'
                                    meta='Friend'
                                    description='View Cat'
                                />
                            </Card.Group>
                        </Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                        <div className="ui sixteen wide column" id="promo-image3">
                            <div className="promo-image3-content">
                                <h1>Converse</h1>
                                <p>
                                    Explore styles tough enough to handle all your workouts
                                            </p>
                                <button className="purple-text-button">shop</button>
                            </div>
                        </div>
                    </Grid.Row>


                </Grid>


            </React.Fragment>
        );
    }
}

export default MenBody;