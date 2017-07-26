import * as React from "react"
import {Button, Form, FormControl, FormGroup, Col, ControlLabel} from "react-bootstrap"

export class SignUp extends React.Component <{},{}>
{
    render(){
        return(
            <div className='SignUp'>
                <div>
                    <Form horizontal>
                        <FormGroup controlId='SignUpName'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Name
                            </Col>
                            <Col sm={5}>
                                <FormControl type='text' placeholder='Your full name'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='SignUpUsername'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Username
                            </Col>
                            <Col sm={5}>
                                <FormControl type='text' placeholder='Your username'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='SignUpPassword'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={5}>
                                <FormControl type='password' placeholder='Your password'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='SignUpConfirmPassword'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Confirm Password
                            </Col>
                            <Col sm={5}>
                                <FormControl type='password' placeholder='Confirm your password'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='SignUpEmail'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={5}>
                                <FormControl type='email' placeholder='Your email'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='SignUpSubmit'>
                            <Col sm={7} smOffset={4}>
                                <Button type='submit' bsStyle='primary'>Sign Up</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>  
            </div>
        );
    }
}