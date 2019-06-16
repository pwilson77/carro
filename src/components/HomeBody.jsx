import React from "react";
import { Grid, Image, Header, Segment } from 'semantic-ui-react';
import Footer from './Footer';


class HomeBody extends React.Component {

    render() {
        return (
            <React.Fragment>

                <Grid.Row>
                    <Grid.Column width={16} className="hero-image">

                        <Grid.Column width={8} id="hero-image-text">
                            <h1>Background <i>and</i> Gradient</h1>
                            <p>
                                Convergent the dictates of the consumer background and development
                            </p>
                            <button class="purple-text-button">View all</button>
                        </Grid.Column>


                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={15}>
                        <Grid>
                            <Grid.Row padded>
                                <Grid.Column width={6}>
                                    <Image
                                        label={{ as: 'a', color: 'teal', position: 'left', content: 'Sale' }}
                                        src={require('../assets/Images/images-bag.png')} />
                                </Grid.Column>
                                <Grid.Column width={10} id="flex-center">
                                    <Header as='h1'>Vera Bradley</Header>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                                        odit? A officiis quisquam atque expedita iste illum accusamus et
                                        fugiat facere aspernatur, molestias ducimus vero natus inventore
                                        necessitatibus! Nulla, nesciunt?
                                     </p>
                                    <button class="purple-button">Shop now</button>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row padded>
                                <Grid.Column width={5}>
                                    <div className="list-i">
                                        <Image
                                            src={require('../assets/Images/images-design.png')}
                                            as='a'

                                            href='http://google.com'
                                            target='_blank'
                                            className='square'
                                        />
                                    </div>
                                    <div className="list-i">
                                        <Image
                                            src={require('../assets/Images/images-model2.png')}
                                            as='a'

                                            href='http://google.com'
                                            target='_blank'
                                            className='square'
                                        />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={11}>
                                    <Image
                                        src={require('../assets/Images/images-model3.png')}
                                        fluid
                                        as='a'
                                        href='http://google.com'
                                        target='_blank'
                                        id='promo-image2'
                                    />
                                    <div id="flex-center2" className="promo-box1">
                                        <Header as='h1'>Let the Game begin</Header>
                                        <p>
                                            Registration is on-get ready for the open
                                    </p>
                                        <button class="purple-button">Sign up</button>
                                    </div>
                                </Grid.Column>
                                <Segment basic textAlign="center" id="promo-box2" className="secondary">
                                    <Header as='h1'>10 Discount for your subscription</Header>
                                    <div class="text-box">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                                            accusantium distinctio nisi quam eum, consequuntur hic quasi
                                            corrupti! Quo rem dignissimos sunt minus dolore labore repellat
                                            sit est accusamus? Alias.
                                    </p>
                                    </div>
                                    <div className="ui input input-box">
                                        <input type="text" placeholder="subscribe.." />
                                        <button class="purple-button">Subscribe</button>
                                    </div>
                                </Segment>
                            </Grid.Row>
                            <Footer />
                        </Grid>

                    </Grid.Column>
                </Grid.Row>
            </React.Fragment>

        )
    }

}


export default HomeBody;
