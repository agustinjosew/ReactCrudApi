import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

class AddUser extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            UserId: '',
            FirstName: '',
            LastName: '',
            EmailId: '',
            MobileNo: '',
            Address: '',
            PinCode: '',
        }

        if (props.user.UserId) {
            this.state = props.user
        } else {
            this.state = this.initialState;
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        let pageTitle;
        let actionStatus;
        if (this.state.UserId) {

            pageTitle = <h2>Edit User</h2>
            actionStatus = <b>Update</b>
        } else {
            pageTitle = <h2>Add User</h2>
            actionStatus = <b>Save</b>
        }

        return (
            <div>
                <h2> {pageTitle}</h2>
                <Row>
                    <Col sm={7}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="FirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="FirstName"
                                    value={this.state.FirstName}
                                    onChange={this.handleChange}
                                    placeholder="First Name" />
                            </Form.Group>
                            <Form.Group controlId="LastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="LastName"
                                    value={this.state.LastName}
                                    onChange={this.handleChange}
                                    placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group controlId="EmailId">
                                <Form.Label>EmailId</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="EmailId"
                                    value={this.state.EmailId}
                                    onChange={this.handleChange}
                                    placeholder="EmailId" />
                            </Form.Group>
                            <Form.Group controlId="MobileNo">
                                <Form.Label>MobileNo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="MobileNo"
                                    value={this.state.MobileNo}
                                    onChange={this.handleChange}
                                    placeholder="MobileNo" />
                            </Form.Group>
                            <Form.Group controlId="Address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Address"
                                    value={this.state.Address}
                                    onChange={this.handleChange}
                                    placeholder="Address" />
                            </Form.Group>

                            <Form.Group controlId="PinCode">
                                <Form.Label>PinCode</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="PinCode"
                                    value={this.state.PinCode}
                                    onChange={this.handleChange}
                                    placeholder="PinCode" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="hidden" name="UserId" value={this.state.UserId} />
                                <Button variant="success" type="submit">{actionStatus}</Button>

                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddUser;  