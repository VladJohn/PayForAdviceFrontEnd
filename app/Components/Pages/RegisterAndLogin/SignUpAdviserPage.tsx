import * as React from "react"
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

export class SignUpAdviserPage extends React.Component<{}, {
    name: string, username: string, password: string,
    email: string, website: string, avatar: string, category : string, categories: Array<any>, errorPost : string;
}>
{
    baseUrlUser: string = 'http://localhost:52619/api/user/adviser';
    baseUrlCategory: string = 'http://localhost:52619/api/category/';
    headers: Headers;

    constructor() {
        super();
        this.state = { name: '', username: '', password: '', email: '', website: '', avatar: '', categories: [], category :'', errorPost : '' };
        this.handleSignUpName = this.handleSignUpName.bind(this);
        this.handleSignUpUsername = this.handleSignUpUsername.bind(this);
        this.handleSignUpPassword = this.handleSignUpPassword.bind(this);
        this.handleSignUpEmail = this.handleSignUpEmail.bind(this);
        this.handleSignUpWebsite = this.handleSignUpWebsite.bind(this);
        this.handleSignUpAvatar = this.handleSignUpAvatar.bind(this);
        this.handleSignUpCategory = this.handleSignUpCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    postData() {
        var cats: any;
        var ceva = { id: 0, username: this.state.username, password: this.state.password, name: this.state.name, email: this.state.email, roleId: 2, website: this.state.website,
                    avatarUrl : this.state.avatar, categoryId :parseInt(this.state.category) }
        var form2 = JSON.stringify(ceva);
        console.log(form2);
        cats = '';
        var that = this;
        return fetch(this.baseUrlUser, { method: "POST", body: form2, headers: this.headers })
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
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }


    componentWillMount() {
        var categories: any[];
        categories = [];
        return fetch(this.baseUrlCategory)
            .then((response) => response.json())
            .then(function (data) {
                categories = data;
            })
            .then(() => {
                this.setState({ categories: categories });
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
    handleSignUpEmail(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ email: event.currentTarget.value });
    }
    handleSignUpWebsite(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ website: event.currentTarget.value });
    }
    handleSignUpAvatar(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ avatar: event.currentTarget.value }); 
    }
    handleSignUpCategory(event:any) {
        event.preventDefault();
        this.setState({ category: event.currentTarget.value});
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
                            <span>
                                Website:
                            </span>
                            <span>
                                <input type="website" className="form-control" name="SignUpEmail" placeholder='Link your website' onChange={this.handleSignUpWebsite} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span>
                                Avatar Url:
                            </span>
                            <span>
                                <input type="avatar" className="form-control" name="SignUpEmail" placeholder='Link your avatar' onChange={this.handleSignUpAvatar} />
                            </span>
                        </div>
                        <span>
                            Field*:
                        </span>
                        <div className="selectContainer">
                            <select onChange={this.handleSignUpCategory} className="form-control" name="category">
                                <option key={0} value={0}>Choose..</option>
                                {console.log(this.state.category)}
                                {  
                                    this.state.categories.map(function (listValue) {
                                    return <option key={listValue.Id} value={listValue.Id}>{listValue.Name}</option>
                                })}
                            </select>
                        </div>
                        <div className="spacing">
                            Don't forget to complete your profile after signing in with more information and to update your prices!
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