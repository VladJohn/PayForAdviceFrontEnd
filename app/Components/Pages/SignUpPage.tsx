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
                <div className="col col-md-8">
                    <h2>
                        Sign Up
                    </h2>
                    <form>
                        <div className="spacing">
                            <span className="text-default">
                                    Name:         
                            </span>
                            <span>
                                    <input type="text" name="SignUpName" className="form-control" placeholder='Type Your Full Name' onChange={this.handleSignUpName}/>
                            </span>
                        </div>
                        <div className="spacing">
                            <span >
                                    Username:
                            </span>
                            <span>
                                <input type="text" name="SignUpUsername"  className="form-control" placeholder='Type Your Username' onChange={this.handleSignUpUsername}/>
                            </span>
                        </div>
                        <div className="spacing">
                            <span>
                                    Password:
                            </span>
                            <span>
                                <input type="password" name="SignUpPassword" className="form-control" placeholder='Type Your Password' onChange={this.handleSignUpPassword}/>
                            </span>
                        </div>
                        <div className="spacing">
                            <span>
                                    Confirm Password:
                            </span>
                            <span>
                                <input type="password" name="SignUpConfirmPassword" className="form-control" placeholder='Retype Your Password' onChange={this.handleSignUpConfirmPassword}/>
                            </span>
                        </div>
                        <div className="spacing">
                            <span>
                                    Email:
                            </span>
                            <span>
                                <input type="email"  className="form-control" name="SignUpEmail" placeholder='Type Your Email' onChange={this.handleSignUpEmail}/>
                            </span>
                        </div>
                        <div className="spacing">
                            <input type='submit' className="btn btn-primary" value="Sign Up"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}