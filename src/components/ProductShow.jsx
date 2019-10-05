import React from 'react';
import { Grid, Image, Header, List, Rating, Label, Button, Icon, Statistic, Form, Card, TextArea, Divider } from 'semantic-ui-react';
import Nav from '../components/Nav';
import Footer3 from '../components/Footer3';



class ProductShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color_selected: '', active_color: 0, size_selected: '', active_size: 0, quantity: 0
        }

        this.setSize = this.setSize.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    handleAddToCart = (e, product) => {
        this.setState(state => {
            let cartItems = [];
            let productAlreadyInCart = false;


            if (JSON.parse(localStorage.getItem('cartItems')) != null) {
                cartItems = JSON.parse(localStorage.getItem('cartItems'))
                cartItems.forEach(cp => {
                    if (cp.id === product.id) {
                        productAlreadyInCart = true;
                        return alert('Product is already in the cart');
                    }
                });
            }

            if (!productAlreadyInCart) {
                cartItems.push({ ...product, count: state.quantity, size_selected: state.size_selected, color_selected: state.color_selected });
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
        });
    }

    handleRemoveFromCart = (e, product) => {
        this.setState(state => {
            const cartItems = state.cartItems.filter(a => a.id !== product.id);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return { cartItems: cartItems };
        })
    }

    setSize = (i, e) => {
        this.setState(
            { size_selected: e.target.value, active_size: i }
        )
    }

    setColor = (i, e) => {
        this.setState(
            { color_selected: e.target.getAttribute('value'), active_color: i }
        )
    }

    addToQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    subtractFromQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1
        })
    }


    render() {
        const currentProduct = this.props.product;
        let productView, availableSizes, colors;



        if (this.props.product) {
            availableSizes = this.props.product.availableSizes.map((size, i) => (
                <Button size='mini' value={size} content={size}
                    onClick={this.setSize.bind(this, i + 1)} key={i + 1}
                    className={this.state.active_size === i + 1 ? 'active_size' : null} />
            ));

            colors = this.props.product.colors.map((color, i) =>
                <Label circular color={color} empty key={i + 1} as="a" value={color}
                    onClick={this.setColor.bind(this, i + 1)}
                    className={this.state.active_color === i + 1 ? 'active_color' : null} />)

            productView = (
                <Grid.Row>
                    <Grid.Column width={7} className="product-area">
                        <Image src={`/products/${this.props.product.sku}_1.jpg`} />
                    </Grid.Column>
                    <Grid.Column width={7} className="product-area">
                        <List bulleted horizontal>
                            <List.Item>  Home   </List.Item>
                            <List.Item>  All Categories   </List.Item>
                            <List.Item>  Mens's Clothing & Accesories </List.Item>
                        </List>
                        <Rating icon='star' defaultRating={3} maxRating={4} className="block" />
                        <Header as='h1'> {`${this.props.product.title}`}</Header>
                        <div className="pricetext">
                            £{`${this.props.product.price}`}
                        </div>
                        <div>
                            <p className="block greycolor">Color</p>

                            {colors}
                        </div>
                        <div className="sizeblock">
                            <p className="block greycolor">Size</p>
                            {availableSizes}
                        </div>
                        <div className="quantityblock">
                            <p className="block greycolor">Quantity</p>

                            <Button.Group size="large">
                                <Button onClick={(e) => this.addToQuantity(e)}>
                                    <Icon name='add' />
                                </Button>
                                <Button.Or text={`${this.state.quantity}`} />
                                <Button onClick={(e) => this.subtractFromQuantity(e)}>
                                    <Icon name='minus' />
                                </Button>
                            </Button.Group>
                        </div>
                        <button className="purple-button" onClick={(e) => this.handleAddToCart(e, currentProduct)} >
                            Add to cart
                </button>
                        <button className="purple-text-button">
                            <i className="heart outline red icon"></i> Add to wish list
                </button>
                    </Grid.Column>
                </Grid.Row>);
        } else {
            productView = <h1>Product is Loading</h1>
        }


        return (
            <React.Fragment>
                <div className="container">

                    <Grid centered padded>
                        <Nav />

                        <div className="ui grid centered padded" id="seg">

                            {productView}
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
                                            <Icon className="heart outline red" /> 22
                                        </Label>
                                        <Label as="a">
                                            <Icon className="comments outline icon" /> 22
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
                        </div>

                        <Footer3 />

                    </Grid>

                </div>
            </React.Fragment>
        );
    }
}

export default ProductShow;