import * as React from "react"
import {Menu} from "Components/Elements/Menu"
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class Header extends React.Component <{},{}>
{
    baseUrl: string = 'http://localhost:52619/api/user/?tokenText=';

    constructor()
    {
        super();
        this.LogOut=this.LogOut.bind(this)
    }

    refresh()
    {
            window.location.replace("/");
    }

    refresh2()
    {
            window.location.reload();
    }

    LogOut(event:any)
    {
        event.preventDefault();
        return fetch(this.baseUrl + localStorage.getItem("token"))
                .then((response) => response.json())
                .then(function (data) {
                   localStorage.setItem("token", '')
                })
                .then(()=>{this.refresh()})
                .catch(function (error) {
                    console.log('request failed', error)
                })
    }

    
    render(){
        let buttonProfile = null;
        let buttonLog = null;
        let userName = null;
        if (localStorage.getItem("token") != '') {
            buttonProfile = <Link to='/myProfile' className="glyphicon glyphicon-user" aria-hidden="true" onClick={this.refresh2}></Link>
            buttonLog = <Link to="/" className="glyphicon glyphicon-log-out" aria-hidden="true" onClick={this.LogOut}></Link>
            userName = <div className="navbar-text">John Snow</div>
        }
        else
            buttonLog = <Link to="/" className="glyphicon glyphicon-log-in" aria-hidden="true" onClick={this.LogOut}></Link>
        return (
            <div>
            <nav className="navbar navbar-default"> 
                <div className="col col-lg-3"></div>
                <div className="container-fluid col col-lg-6">
                    <Link className="navbar-brand" onClick={this.refresh} to="/" ><img src = "/Advicy.png" className="logo"></img></Link>
                    <Router>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            {userName}
                        </li>
                        <li>
                           {buttonProfile}
                        </li>
                        <li> 
                            {buttonLog}
                        </li>
                    </ul>
                    </Router>
                </div>
                <div className="col col-lg-3"></div>
            </nav>
            <Menu/>
            </div>
        );
    }
}