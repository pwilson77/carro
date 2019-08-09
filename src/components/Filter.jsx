import React from 'react';
import { Card, Icon, Label, Button, Checkbox, Form } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";



class Filter extends React.Component {
    state = {
        value: this.props.brand
    }

    render() {
        const colors = [
            'red',
            'orange',
            'yellow',
            'olive',
            'green',
            'teal',
            'blue',
            'violet',
            'purple',
            'pink',
            'brown',
            'grey',
            'black',
        ];

        return (
            <Card>
                <Card.Content>

                    <Card.Header>
                        {this.props.count} products found
                    </Card.Header>


                    <Card.Meta><Icon name="cancel" size="mini" />Gender: Women</Card.Meta>
                    <Card.Meta><Icon name="cancel" size="mini" />Category: Dresses</Card.Meta>
                    <Form className="form">

                        <div className="filtercon">
                            Color
                            <div>{colors.map(color => <Label circular color={color} empty key={color} href="#" />)}</div>
                        </div>
                        <div className="filtercon">
                            Size

                            <Form.Field>
                                <Button.Group >
                                    <Button size='mini' content='XS' compact value="XS" onClick={this.props.handleChangeSize} />
                                    <Button size='mini' content='S' compact value="S" onClick={this.props.handleChangeSize} />
                                    <Button size='mini' content='M' compact value="M" onClick={this.props.handleChangeSize} />
                                    <Button size='mini' content='L' compact value="L" onClick={this.props.handleChangeSize} />
                                    <Button size='mini' content='XL' compact value="XL" onClick={this.props.handleChangeSize} />
                                </Button.Group>
                            </Form.Field>
                        </div>

                        <div className="filtercon">
                            Price
                            <InputRange
                                maxValue={20}
                                minValue={0}
                                formatLabel={value => `$ ${value}`}
                                value={this.props.start}
                                onChange={value => this.props.handlePrice(value)}
                            />
                        </div>
                        <div className="filtercon">
                            <Form.Field>
                                <Checkbox
                                    label='Sphynx'
                                    name='checkboxRadioGroup'
                                    value='Sphynx'
                                    onChange={this.props.handleCheckboxChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox
                                    label='DGK'
                                    name='checkboxRadioGroup'
                                    value='DGK'
                                    onChange={this.props.handleCheckboxChange}
                                />
                            </Form.Field>
                        </div>
                        <div className="filtercon">
                            <button className="purple-button2" onClick={this.props.handleForm}
                            >
                                Apply filters</button>
                            <span></span>
                            <Button basic icon="cancel" content="clear all" onClick={this.props.handleReset} />
                        </div>

                    </Form>

                </Card.Content>
            </Card >

        );
    }
}

export default Filter;