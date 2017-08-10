import * as React from "react"
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

export class SignUpPage extends React.Component<{}, { name: string, username: string, password: string, cfpassword: string, email: string, errorPost: string }>
{
    baseUrl: string = 'http://localhost:52619/api/user/';
    headers: Headers;

    constructor() {
        super();
        this.state = { name: '', username: '', password: '', cfpassword: '', email: '', errorPost: "" };
        this.handleSignUpName = this.handleSignUpName.bind(this);
        this.handleSignUpUsername = this.handleSignUpUsername.bind(this);
        this.handleSignUpPassword = this.handleSignUpPassword.bind(this);
        this.handleSignUpConfirmPassword = this.handleSignUpConfirmPassword.bind(this);
        this.handleSignUpEmail = this.handleSignUpEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    postData() {
        var cats: any;
        var ceva = { id: 0, username: this.state.username, password: this.state.password, name: this.state.name, email: this.state.email, roleId: 1 }
        var form2 = JSON.stringify(ceva);
        console.log(form2);
        cats = '';
        var that = this;
        return fetch(this.baseUrl, { method: "POST", body: form2, headers: this.headers })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then(function (error) {
                            that.refresh();
                        });
                } else {
                    return response.json()
                        .then(function (error) {
                            that.setState({ errorPost: error.Message })
                        });
                }
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    handleSignUpName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ name: event.currentTarget.value });
    }
    handleSignUpUsername(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ username: event.currentTarget.value });
    }
    handleSignUpPassword(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ password: event.currentTarget.value });
    }
    handleSignUpConfirmPassword(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ cfpassword: event.currentTarget.value });
    }
    handleSignUpEmail(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ email: event.currentTarget.value });
    }

    refresh() {
        window.location.replace("/success");
    }
    handleSubmit(e: any) {
        e.preventDefault();
        this.postData();
    }

    render() {
        let message = null;
        if (this.state.errorPost != '') {
            message = <div className="spacing alert alert-danger alert-container"><strong>Error:</strong> {this.state.errorPost}</div>
        }
        return (
            <div className='SignUpPage'>
                <div className="col col-md-8">
                    <h2>
                        Sign Up
                    </h2>
                    <form>
                        <div className="spacing">
                            <span className="text-default">
                                Name*:
                            </span>
                            <span>
                                <input type="text" name="SignUpName" className="form-control" placeholder='Type Your Full Name' onChange={this.handleSignUpName} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span >
                                Username*:
                            </span>
                            <span>
                                <input type="text" name="SignUpUsername" className="form-control" placeholder='Type Your Username' onChange={this.handleSignUpUsername} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span>
                                Password*:
                            </span>
                            <span>
                                <input type="password" name="SignUpPassword" className="form-control" placeholder='Type Your Password' onChange={this.handleSignUpPassword} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span>
                                Email*:
                            </span>
                            <span>
                                <input type="email" className="form-control" name="SignUpEmail" placeholder='Type Your Email' onChange={this.handleSignUpEmail} />
                            </span>
                        </div>
                        <div className="spacing">
                            <Link to='/' className="btn blue-button" onClick={this.handleSubmit}>Sign Up</Link>
                        </div>
                    </form>
                    {message}
                </div>
            </div>
        );
    }
}