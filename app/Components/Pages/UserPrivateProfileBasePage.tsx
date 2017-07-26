import * as React from 'react'
import {UserList} from "Components/Elements/User"
import {ListView} from "Components/Elements/ListView"
import {Button, Form, FormControl, FormGroup, Col, ControlLabel} from "react-bootstrap"

export class UserPrivateProfileBasePage extends React.Component <{name: string, email: string, bio: string, website: string},{}>{
    render(){
        return (
            <div className = "UserPrivateProfileBasePage">
                <div style={{backgroundColor: '#8babe0'}}>
                    <Form horizontal style={{padding:'20px'}}>
                        <FormGroup controlId='ChangeName'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Name
                            </Col>
                            <Col sm={5}>
                                <FormControl type='text' placeholder={this.props.name}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='ChangePassword'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={5}>
                                <FormControl type='password' placeholder='Type new password'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='ChangeConfirmPassword'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Confirm Password
                            </Col>
                            <Col sm={5}>
                                <FormControl type='password' placeholder='Confirm new password'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='ChangeEmail'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={5}>
                                <FormControl type='email' placeholder={this.props.email}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='ChangeBio'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Bio
                            </Col>
                            <Col sm={5}>
                                <FormControl type='text' placeholder={this.props.bio}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='ChangeWebsite'>
                            <Col componentClass={ControlLabel} sm={2}>
                                Website
                            </Col>
                            <Col sm={5}>
                                <FormControl type='text' placeholder={this.props.website}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='ChangeAvatarUrl'>
                            <Col componentClass={ControlLabel} sm={2}>
                                New Avatar Url
                            </Col>
                            <Col sm={5}>
                                <FormControl type='text' placeholder='Paste the url to your avatar picture'/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId='ChangeUpdate'>
                            <Col sm={7} smOffset={4}>
                                <Button type='submit' bsStyle='primary'>Update Information</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}