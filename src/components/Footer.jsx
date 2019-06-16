import React from "react";
import { Grid, List } from 'semantic-ui-react';


class Footer extends React.Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Grid.Row>
                    <Grid columns={4}>
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
                        <Grid.Column>
                            <List link>
                                <List.Item active>Home</List.Item>
                                <List.Item as='a'>About</List.Item>
                                <List.Item as='a'>Jobs</List.Item>
                                <List.Item as='a'>Team</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </React.Fragment>
        );
    }
}

export default Footer;