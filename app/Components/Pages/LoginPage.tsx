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
                <div className="col col-lg-6">
                    <h1>
                        Log in
                    </h1>
                    <form>
                        <div>
                            <span>
                                    Username:
                            </span>
                            <span>
                                <input type="text" name="username" className="form-control" placeholder='Type Your Username' onChange={this.handleLogInUsername}/>
                            </span>
                        </div>
                        <div>
                            <span className="spacing">
                                    Password:
                            </span>
                            <span>
                                <input type="password" name="password" className="form-control" placeholder='Type Your Password' onChange={this.handleLogInPassword}/>
                            </span>
                        </div>
                    <div><input type='submit' className="btn btn-primary spacing" value="Log in"/></div>
                    <div>
                        <span className="spacing">
                                OR
                        </span>
                    </div>
                    <div>
                        <span>
                            <button className="btn btn-primary">Login With FaceBook</button>
                        </span>
                    </div>
                    <div className="spacing">
                    Don't have an account?
                    </div>
                    <div><button className="btn btn-default">Register</button></div>
                    </form>
                    
                </div>
            </div>
        );
    }
}