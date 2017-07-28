import * as React from 'react';

//CAND SE SCHIMBA PAGINA DE PE LOGIN PE ALTCEVA, IN AFARA DE REGISTER, SA SE TRANSMITA TOKENU

export class LoginPage extends React.Component <{},{username:string, password:string, token:string}>{
    baseUrl: string = 'http://localhost:52619/api/user/';
    headers: Headers;
    
    constructor() {
        super();
        this.state = {username:'', password:'', token:''};
        this.handleLogInUsername = this.handleLogInUsername.bind(this);
        this.handleLogInPassword = this.handleLogInPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    handleLogInUsername(event : React.FormEvent<HTMLInputElement>){
            this.setState({username:event.currentTarget.value});
    }
    handleLogInPassword(event : React.FormEvent<HTMLInputElement>){
            this.setState({password:event.currentTarget.value});
    }

    getData(){
        var cats: any;
        cats = '';
        return fetch(this.baseUrl)
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
            })
            .then(() => (
                this.setState({ token: cats.TokenText }),
                console.log(this.state.token)
            ))
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    handleSubmit(){
        console.log("inainte de url change");
        this.baseUrl = this.baseUrl + '?username=' + this.state.username + '&password=' + this.state.password;
        console.log(this.baseUrl);
        var req = this.getData();
        console.log("asta este tokenu:" + this.state.token);   
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
                    <div><button className="btn btn-primary spacing" onClick={this.handleSubmit}>Login in</button></div>
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