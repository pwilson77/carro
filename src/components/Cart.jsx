import React, { Component } from 'react';
import { Icon, Label, Popup, Button, Header, Table, Image } from 'semantic-ui-react';


class Cart extends Component {

    render() {
        const { cartItems } = this.props;

        const popup = () => (
            <React.Fragment>
                {cartItems.length === 0 ? <Header as="h1">There are no Items in the Cart</Header> : <Header as="h1"> {cartItems.length} items in my cart</Header>}


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
                        <Table.Row>
                            <Table.Cell className="flex">

                                <Image src="/Images/images-shirt1.png" />
                                <div>
                                    <p>Green shirt</p>
                                    <p>Men</p>
                                    <Button icon="red cancel" circular basic />
                                </div>

                            </Table.Cell>
                            <Table.Cell>
                                <Header as="h2">XXL</Header>
                            </Table.Cell>
                            <Table.Cell>
                                <Button.Group circular>
                                    <Button icon="add" />
                                    <Button basic disabled content={0} />
                                    <Button icon="minus" />

                                </Button.Group>
                            </Table.Cell>
                            <Table.Cell className="purple-text">
                                £12.00
                    </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

            </React.Fragment>
        )


        return (<Popup
            on="click"
            trigger={
                <Button basic circular>
                    <Icon name='shopping bag' />
                    <Label color='red' floating circular> 22 </Label>
                </Button>}
            content={popup}
            position="bottom right"

        />);
    }
}

export default Cart;