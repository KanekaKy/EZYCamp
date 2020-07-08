/* Controlled form validation
1. create a property named touched to check if the user has touched the fields. We need to use onBlur
2. add onBlur to each field: firstname, lastname, phonenum and email:Ex: onBlur={this.handleBlur("firstName")}
3. Create handlblur method by using arrow function as its an event handler. So, we don't need to use bind() method in the constructor.
4. Use setState to change the touched object. 
5. We don't want to send all. We want to change the property. We can use the spread syntax to list all the properties related to the event. We use computed property name to set property name  field and set it to true. So, we know its been touched. 
6. Set form validation by creating a method called validate with some params we want to validate. 
7. Set an error object with some empty string which means no error. 
8. Then create a condition to check if the field has been touched,start with first name. Add two more condition when the first name is less than 2 or more than 15. Do the same logic for lastname
9.  Validate phone num by using regex to make sure, it contains only digit. 
10. Check if email field has been touched and if it contains an @ sign. 
11. in render we need to declare a variable error as well as the previous one is inside the function. 
12. declare error variable using the validate method and put this.state and properties. 
13. In the form, we need to create an 'invalid' attribute which will be a boolean. Usually, empty string is false. In this case, the error string is false. So, we need to use a formfeedback in reactstrap to give an error. 
14. Do this for all forms. 
*/
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: { //1
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is:" + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => () => {//3
        this.setState({
            touched: { ...this.state.touched, [field]: true } //4 & 5
        });
    }

    validate(firstName, lastName, phoneNum, email) {//6
        const errors = {//7
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };
        if (this.state.touched.firstName) {//8
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First Name must be 15 or less characters.';
            }
        }
        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last Name must be 15 or less characters.';
            }
        }
        const reg = /^\d+$/;//9
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = "The phone number should contain only numbers.";
        }
        if (this.state.touched.email && !email.includes('@')) {//10
            errors.email = "Email should contain a @.";
        }
        return errors;
    }

    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);//11, 12
        return (
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem> <Link to="/home"> Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1 Nucamp Way<br />
                        Seattle, WA 98001<br />
                        U.S.A.
                    </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> campsites@nucamp.co</a>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}//14
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        invalid={errors.phoneNum}
                                        onBlur={this.handleBlur("phoneNum")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.phoneNum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 4, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="feedback" name="feedback"
                                        rows="12"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;