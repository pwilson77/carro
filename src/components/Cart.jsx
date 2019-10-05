import React, { Component } from 'react';
import { Icon, Label, Popup, Button, Header, Table, Image } from 'semantic-ui-react';


class Cart extends Component {

    componentDidMount = {

    }

    render() {
        let label, cartRow;
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        //console.log(cartItems);

        if (cartItems != null) {
            label = <Label color='red' floating circular> {cartItems.length} </Label>
            cartRow = cartItems.map((product) => (
                <Table.Row>
                    <Table.Cell className="flex">
                        <Image src="/Images/images-shirt1.png" />
                        <div>
                            <p>{product.title}</p>
                            <p>Men</p>
                            <Button icon="red cancel" circular basic />
                        </div>
                    </Table.Cell>
                    <Table.Cell>
                        <Header as="h2">{product.size_selected}</Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Button.Group circular>
                            <Button icon="add" />
                            <Button basic disabled content={0} />
                            <Button icon="minus" />

                        </Button.Group>
                    </Table.Cell>
                    <Table.Cell className="purple-text">
                        £{product.price}
                    </Table.Cell>
                </Table.Row>
            ))
        } else {
            label = null;
            cartRow = null;
        }



        const popup = () => (
            <React.Fragment>
                {cartItems === null ? <Header as="h1">There are no Items in the Cart</Header> : <Header as="h1"> {cartItems.length} items in my cart</Header>}

                <Table collapsing className="popup-menu">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={9}>Item</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Size</Table.HeaderCell>
                            <Table.HeaderCell width={3}>Quantity</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {cartRow}
                    </Table.Body>
                </Table>

            </React.Fragment>
        )


        return (<Popup
            on="click"
            trigger={
                <Button basic circular>
                    <Icon name='shopping bag' />
                    {label}
                </Button>}
            content={popup}
            position="bottom right"

        />);
    }
}

export default Cart;