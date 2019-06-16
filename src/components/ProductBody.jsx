import React from 'react';
import { Grid, Image, Header, List, Rating, Label, Button, Icon, Statistic, Form, Card, TextArea, Divider } from 'semantic-ui-react';

class ProductBody extends React.Component {
    state = {
        colors: [
            'red',
            'orange',
            'yellow',
            'olive',
            'green',
            'teal',
            'blue',
            'violet',
            'purple',
            'pink',
            'brown',
            'grey',
            'black',
        ]
    }


    render() {
        const { colors } = this.state;
        return (
            <React.Fragment>
                <Grid.Row>

                    <Grid.Column width={7} className="product-area">
                        <Image src={require('../assets/Images/images-shirt13.png')} />
                    </Grid.Column>
                    <Grid.Column width={7} className="product-area">
                        <List bulleted horizontal>
                            <List.Item>  Home   </List.Item>
                            <List.Item>  All Categories   </List.Item>
                            <List.Item>  Mens's Clothing & Accesories </List.Item>
                        </List>
                        <Rating icon='star' defaultRating={3} maxRating={4} className="block" />
                        <Header as='h1'> Super Oversized T-Shirt With Raw Sieves in Brown</Header>
                        <div className="pricetext">
                            £13.99
                        </div>
                        <div>{colors.map(color => <Label circular color={color} empty key={color} />)}</div>
                        <div className="sizeblock">
                            <p className="block greycolor">Size</p>
                            <Button size='mini' content='XS' />
                            <Button size='mini' content='S' />
                            <Button size='mini' content='M' />
                            <Button size='mini' content='L' />
                            <Button size='mini' content='XL' />
                            <Button size='mini' content='XXL' />
                        </div>
                        <div className="quantityblock">
                            <p className="block greycolor">Quantity</p>

                            <Button.Group size="large">
                                <Button>
                                    <Icon name='add' />
                                </Button>
                                <Button.Or text="2" />
                                <Button>
                                    <Icon name='minus' />
                                </Button>
                            </Button.Group>
                        </div>
                        <button className="purple-button">
                            Add to cart
                        </button>
                        <button className="purple-text-button">
                            <i className="heart outline red icon"></i> Add to wish list
                        </button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                    <Grid.Column width={14}><Header as="h3">Product reviews</Header></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Rating icon='star' defaultRating={3} maxRating={4} className="block" />
                        <Statistic size='mini'>
                            <Statistic.Value>Pablo Permins</Statistic.Value>

                            <Statistic.Label>an hour ago</Statistic.Label>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ea
                            beatae impedit, harum obcaecati quas tempora dignissimos provident
                            et reprehenderit iusto quos necessitatibus omnis nesciunt voluptas
                            inventore ab ad earum!
                        </p>
                        <Label.Group circular>
                            <Label as="a">
                                <Icon name="heart outline red" /> 22
                            </Label>
                            <Label as="a">
                                <Icon name="comments outline icon" /> 22
                            </Label>
                        </Label.Group>
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row id="review">
                    <Grid.Column width={14}>
                        <Divider width={14} />

                        <Form size="large">
                            <Form.Field label='First name' control='input' placeholder='First name' width={7} />
                            <Form.Field
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                label='Your review'
                                placeholder='Your review'
                                width={9}
                            />
                            <Form.Field inline>
                                <label >Overall rating</label>
                                <Rating icon='star' defaultRating={3} maxRating={5} />

                            </Form.Field>
                            <Button>Submit</Button>
                        </Form>
                    </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={14}>
                        <Header as="h2">You may also like</Header>
                        <Card.Group itemsPerRow={4}>
                            <Card
                                href='#card-example-link-card'
                                image={require('../assets/Images/images-shirt12.png')}
                                header='Matt Giampietro'
                                meta='Friend'
                                description='View Cat'
                            />
                            <Card
                                href='#card-example-link-card'
                                image={require('../assets/Images/images-shirt12.png')}
                                header='Matt Giampietro'
                                meta='Friend'
                                description='View Cat'
                            />
                            <Card
                                href='#card-example-link-card'
                                image={require('../assets/Images/images-shirt12.png')}
                                header='Matt Giampietro'
                                meta='Friend'
                                description='View Cat'
                            />
                            <Card
                                href='#card-example-link-card'
                                image={require('../assets/Images/images-shirt12.png')}
                                header='Matt Giampietro'
                                meta='Friend'
                                description='View Cat'
                            />
                        </Card.Group>

                    </Grid.Column>
                </Grid.Row>
            </React.Fragment>
        );
    }
}

export default ProductBody;