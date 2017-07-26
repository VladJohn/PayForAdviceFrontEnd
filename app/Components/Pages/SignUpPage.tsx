import * as React from "react"

export class SignUpPage extends React.Component <{},{name : string, username:string, password:string, cfpassword:string, email:string}>
{
    constructor() {
    super();
    this.state = {name:'', username:'', password:'', cfpassword:'', email:''};
    this.handleSignUpName = this.handleSignUpName.bind(this);
    this.handleSignUpUsername = this.handleSignUpUsername.bind(this);
    this.handleSignUpPassword = this.handleSignUpPassword.bind(this);
    this.handleSignUpConfirmPassword = this.handleSignUpConfirmPassword.bind(this);
    this.handleSignUpEmail = this.handleSignUpEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSignUpName(event : React.FormEvent<HTMLInputElement>){
            this.setState({name:event.currentTarget.value});
    }
    handleSignUpUsername(event : React.FormEvent<HTMLInputElement>){
            this.setState({username:event.currentTarget.value});
    }
    handleSignUpPassword(event : React.FormEvent<HTMLInputElement>){
            this.setState({password:event.currentTarget.value});
    }
    handleSignUpConfirmPassword(event : React.FormEvent<HTMLInputElement>){
            this.setState({cfpassword:event.currentTarget.value});
    }        
    handleSignUpEmail(event : React.FormEvent<HTMLInputElement>){
            this.setState({email:event.currentTarget.value});
    }
    handleSubmit(event : React.FormEvent<HTMLInputElement>){

    }

    render(){
        return(
            <div className='SignUpPage'>
                <div className="col col-lg-4">
                </div>
                <div className="col col-lg-6">
                    <title> 
                        Sign Up 
                    </title>
                    <h1>
                        Sign Up
                    </h1>
                    <form>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Name         
                                </label>
                            </span>
                            <span>
                                    <input type="text" name="SignUpName" placeholder='Type Your Full Name' onChange={this.handleSignUpName}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Username
                                </label>
                            </span>
                            <span>
                                <input type="text" name="SignUpUsername" placeholder='Type Your Username' onChange={this.handleSignUpUsername}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Password
                                </label>
                            </span>
                            <span>
                                <input type="password" name="SignUpPassword" placeholder='Type Your Password' onChange={this.handleSignUpPassword}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Confirm Password
                                </label>
                            </span>
                            <span>
                                <input type="password" name="SignUpConfirmPassword" placeholder='Retype Your Password' onChange={this.handleSignUpConfirmPassword}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Email
                                </label>
                            </span>
                            <span>
                                <input type="email" name="SignUpEmail" placeholder='Type Your Email' onChange={this.handleSignUpEmail}/>
                            </span>
                        </div>
                        <div>
                            <input type='submit' className="btn btn-primary" value="Sign Up"/>
                        </div>
                    </form>
                </div>
                <div className="col col-lg-4">
                </div>
            </div>
        );
    }
}