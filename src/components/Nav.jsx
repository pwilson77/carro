import React from "react";
import { Grid, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Women'
    }
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
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
                <Cart />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Nav;
