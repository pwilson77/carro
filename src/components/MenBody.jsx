import React from 'react';
import { Grid, Header, List, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Filter from './Filter';
import { ProductContext } from './ProductContext';


class MenBody extends React.Component {
    static contextType = ProductContext;

    constructor(props) {
        super(props);
        this.state = {
            brand: [], size: "",
            value4: {
                min: 5,
                max: 10,
            }
        };

        this.handleCheckBoxChange = this.handleCheckboxChange.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }




    handleCheckboxChange(e, { value }) {
        if (this.state.brand.includes(value)) {
            for (var i = 0; i < this.state.brand.length; i++) {
                if (this.state.brand[i] === value) {
                    this.state.brand.splice(i, 1);
                }
            }
        } else {
            this.state.brand.push(value)
        }
    }

    handleChangeSize(e) {
        this.setState({ size: e.target.value });
    }

    handlePrice(value) {
        this.setState({ value4: value })
    }

    handleForm() {
        this.listProducts();
    }

    handleReset() {
        this.context.updateProducts(this.context.products);
        this.setState({ brand: [] });
    }

    listProducts = () => {
        var intermediary_prod = this.context.products
        if (this.state.value4 !== '') {
            intermediary_prod = this.context.products.filter(a => a.price >= this.state.value4.min && a.price <= this.state.value4.max);
        }
        if (this.state.size) {
            intermediary_prod = intermediary_prod.filter(a => a.availableSizes.indexOf(this.state.size.toUpperCase()) >= 0);
        }
        if (this.state.brand.length > 1) {
            intermediary_prod = intermediary_prod.filter(a => this.state.brand.includes(a.brand));
        }
        return this.context.updateProducts(intermediary_prod);
    }


    render() {

        return (

            <React.Fragment>

                <Grid centered padded>
                    <Grid.Row>
                        <Grid.Column width={16} className="hero-image2">
                            <Grid className="hero-image2-content">
                                <Grid.Row padded="true">
                                    <Header as='h1'>Men's Wear

                                    </Header>
                                </Grid.Row>
                                <Grid.Row padded="true" columns={3}>
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

                    <Grid.Row padded="true" className="items-container">
                        <Grid.Column width={4}>
                            <Filter
                                handleCheckboxChange={this.handleCheckBoxChange}
                                count={this.context.filteredProducts.length}
                                checkbox={this.state.brand}
                                start={this.state.value4}
                                handlePrice={this.handlePrice}
                                handleChangeSize={this.handleChangeSize}
                                handleForm={this.handleForm}
                                handleReset={this.handleReset}
                            />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <ProductList selectedItem={this.state.selectedItem} products={this.context.filteredProducts} />
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