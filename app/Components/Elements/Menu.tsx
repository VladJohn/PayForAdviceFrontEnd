import * as React from 'react'
import {Nav, NavItem} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class Menu extends React.Component <{},{isHome:boolean}>
{
    constructor()
    {
        super();
        this.state = {isHome : true};
    }

    handleSelect()
    {
        ///dunno how to do this bs
        //this.state.isHome==false ? show me MyQuestion : show me Home
        //this.state.isHome==false ? show me MyQuestion : show me Home  
    }

    refresh()
    {
            window.location.reload();
    }

    render()
    {
        return(
            <div className='menu'>
                <div className="col col-lg-3"></div>
                    <Router>
                        <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" onClick={this.refresh} >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/myQuestions' className="nav-link" onClick={this.refresh}>My Questions</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/myAnsweredQuestions' className="nav-link" onClick={this.refresh}>My Answered Questions</Link>
                        </li>
                        </ul>
                    </Router>

                <div className="col col-lg-3"></div>
            </div>
        );
    }
}