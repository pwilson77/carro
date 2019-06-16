import React from 'react';
import { Grid, List, Button } from 'semantic-ui-react';


class Footer2 extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Grid.Row>
                    <div className="ui input input-box  subscribe-box">
                        <div className="subscribe-text">
                            <b>SUBSCRIBE FOR SHOP NEWS,UPDATES AND SPECIAL OFFERS</b>
                        </div>
                        <input
                            type="text"
                            className="right aligned"
                            placeholder="subscribe.."
                        />
                        <button className="purple-button">Subscribe</button>
                    </div>
                </Grid.Row>
                <Grid.Row>
                    <List horizontal className="center aligned very relaxed" id="footer2">
                        <List.Item>
                            <List.Content>
                                <List.Header>Women</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header>Men</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header>Kids</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header>Shoes</List.Header>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content>
                                <List.Header>Brands</List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                </Grid.Row>
                <Grid.Row centered >
                    <div>
                        <Button circular color='facebook' icon='facebook' />
                        <Button circular color='twitter' icon='twitter' />
                        <Button circular color='linkedin' icon='linkedin' />
                        <Button circular color='google plus' icon='google plus' />
                    </div>
                </Grid.Row>
            </React.Fragment>
        );
    }
}

export default Footer2;