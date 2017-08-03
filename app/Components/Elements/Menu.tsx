import * as React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class Menu extends React.Component <{},{tokenData : any}>
{

    baseUrl: string = 'http://localhost:52619/api/user/';
    headers: Headers;

    constructor() {
        super();
        this.state = { tokenData: "" };
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'TokenText': localStorage.getItem('token') });
    }

    componentDidMount() {
        if (localStorage.getItem("token") != '') {
            var cats = '';
            return fetch(this.baseUrl + "?something=a", { method: "GET", headers: this.headers })
                .then((response) => response.json())
                .then(function (data) {
                    cats = data;
                    console.log(cats);
                })
                .then(() => {this.setState({ tokenData: cats });})
                .catch(function (error) {
                    console.log('request failedddd', error)
                })
        }
    }

    refresh()
    {
            window.location.reload();
    }

    render()
    {
        let buttonQuestions = null;
        let buttonPendingQuestions = null;
        let buttonAnsweredQuestions = null;
        let buttonAbout = null;
        if (localStorage.getItem("token") != '') {
            buttonQuestions = <Link to='/myQuestions' className="nav-link blue" onClick={this.refresh}>My Questions</Link>;
            if (this.state.tokenData.Role == 2)
                {
                      buttonAnsweredQuestions = <Link to='/myAnsweredQuestions' className="nav-link blue" onClick={this.refresh}>My Answered Questions</Link>  
                      buttonPendingQuestions = <Link to='/myPendingQuestions' className="nav-link blue" onClick={this.refresh}>My Pending Questions</Link>  
                }
            
        }
        return(
            <div className='menu'>
                <div className="col col-lg-3"></div>
                    <Router>
                        <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to='/' className="nav-link blue" onClick={this.refresh} >Home</Link>
                        </li>
                        <li className="nav-item">
                            {buttonQuestions}
                        </li>
                        <li className="nav-item">
                            {buttonAnsweredQuestions}
                        </li>
                        <li className="nav-item">
                            {buttonPendingQuestions}
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link blue" onClick={this.refresh}>About Advicy</Link>
                        </li>
                        </ul>
                    </Router>

                <div className="col col-lg-3"></div>
            </div>
        );
    }
}