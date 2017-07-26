import * as React from 'react';

export class LoginPage extends React.Component <{},{username:string, password:string}>{
    constructor() {
        super();
        this.state = {username:'', password:''};
        this.handleLogInUsername = this.handleLogInUsername.bind(this);
        this.handleLogInPassword = this.handleLogInPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLogInUsername(event : React.FormEvent<HTMLInputElement>){
            this.setState({username:event.currentTarget.value});
    }
    handleLogInPassword(event : React.FormEvent<HTMLInputElement>){
            this.setState({password:event.currentTarget.value});
    }
    handleSubmit(event : React.FormEvent<HTMLInputElement>){

    }

    render() {
        return (
            <div className="LoginPage">
                <div className="col col-lg-4">
                </div>
                <div className="col col-lg-6">
                    <title> 
                        Log in! 
                    </title>
                    <h1>
                        Log in!
                    </h1>
                    <form>
                        <div>
                            <span>
                                <label>
                                    Username
                                </label>
                            </span>
                            <span>
                                <input type="text" name="username" placeholder='Type Your Username' onChange={this.handleLogInUsername}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label>
                                    Password
                                </label>
                            </span>
                            <span>
                                <input type="password" name="password" placeholder='Type Your Password' onChange={this.handleLogInPassword}/>
                            </span>
                        </div>
                    <input type='submit' className="btn btn-primary" value="Log in"/>
                    <button className="btn btn-default">Register</button>
                    </form>
                    <div>
                        <span>
                            <label>
                                OR
                            </label>
                        </span>
                    </div>
                    <div>
                        <span>
                            <button className="btn btn-primary">Login With FaceBook</button>
                        </span>
                    </div>
                </div>
                <div className="col col-lg-4">
                </div>
            </div>
        );
    }
}