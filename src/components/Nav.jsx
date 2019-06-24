import React from "react";
import { Grid, Input, Menu, Icon, Label, Popup, Button, Table, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
  state = { activeItem: 'Women' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const popup = () => (
      <React.Fragment>
        <Header as="h1">4 items in my cart</Header>

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


    const { activeItem } = this.state

    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <Menu secondary>

            <Menu.Item name="SHOPMATE" className="purple-text" as={Link} to="/" />

          </Menu>
        </Grid.Column>
        <Grid.Column width={13}>
          <Menu secondary>
            <Menu.Item name='Women' active={activeItem === 'Women'} onClick={this.handleItemClick} as={Link} to="/men" />
            <Menu.Item name='Men' active={activeItem === 'Men'} onClick={this.handleItemClick} as={Link} to="/men" />
            <Menu.Item name='Kids' active={activeItem === 'Kids'} onClick={this.handleItemClick} as={Link} to="/men" />
            <Menu.Item name='Shoes' active={activeItem === 'Shoes'} onClick={this.handleItemClick} as={Link} to="/men" />
            <Menu.Item name='Brands' active={activeItem === 'Brands'} onClick={this.handleItemClick} as={Link} to="/men" />

            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item>
                <Popup
                  on="click"
                  trigger={
                    <Button basic circular>
                      <Icon name='shopping bag' />
                      <Label color='red' floating circular> 22 </Label>
                    </Button>}
                  content={popup}
                  position="bottom right"

                />

              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Nav;
