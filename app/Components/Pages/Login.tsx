import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { LoginForm } from 'react-stormpath';
import { AppViewer } from 'Components/AppViewer';
import { App } from 'App';


export class Login extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className="col col-lg-4"></div>
                <div className="col col-lg-6">
                    <title> Log in! </title>
                    <h1>Log in!</h1>
                    <form>
                        <div><label >Username:
                            <input type="text" name="username" />
                        </label></div>
                        <div><label>Password:
                        <input type="password" name="password" />
                        </label></div></form>
                    <button className="btn btn-primary" >Log in</button>
<button className="btn btn-primary" >Register</button>
                </div>
                <div className="col col-lg-4"></div>
            </div>
        );
    }
}