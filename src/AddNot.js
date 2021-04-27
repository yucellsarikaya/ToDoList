import React, { Component } from 'react'
import { Col, ButtonToggle, Form, FormGroup, Label, Input } from 'reactstrap';
import alertify from 'alertifyjs'
let array = [];
export default class AddNot extends Component {
    state = {x: "" }

    handleChange = event => {
        this.setState({ x: event.target.value })
    }

    handleSubmit = event => {
        console.log("add not: " + this.state.x);
        event.preventDefault();
        array.push(this.state.x);
        alertify.success('Added to to do list');
        this.props.noteAdd(array);
        event.target.reset();
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="text" sm={2}>Task to be done</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="text" onChange={this.handleChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <ButtonToggle color="success" type="submit">Add Note</ButtonToggle>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
