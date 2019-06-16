import React from "react";
import { Grid, Image, Input, Menu, Icon, Label, MenuItem } from 'semantic-ui-react';

class Header extends React.Component {
  state = { activeItem: 'Women' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <Menu secondary>

            <Menu.Item name="SHOPMATE" className="purple-text" />

          </Menu>
        </Grid.Column>
        <Grid.Column width={13}>
          <Menu secondary>
            <Menu.Item name='Women' active={activeItem === 'Women'} onClick={this.handleItemClick} />
            <Menu.Item name='Men' active={activeItem === 'Men'} onClick={this.handleItemClick} />
            <Menu.Item name='Kids' active={activeItem === 'Kids'} onClick={this.handleItemClick} />
            <Menu.Item name='Shoes' active={activeItem === 'Shoes'} onClick={this.handleItemClick} />
            <Menu.Item name='Brands' active={activeItem === 'Brands'} onClick={this.handleItemClick} />

            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item>
                <Icon name='shopping bag' />
                <Label color='red' floating circular> 22 </Label>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Header;
