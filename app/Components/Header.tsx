import * as React from "react"
import {Menu} from "Components/Elements/Menu"
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class Header extends React.Component <{},{}>
{
    refresh()
    {
            window.location.reload();
    }

    render(){
        return (
            <div>
            <nav className="navbar navbar-default"> 
                <div className="col col-lg-3"></div>
                <div className="container-fluid col col-lg-6">
                    <Link className="navbar-brand" onClick={this.refresh} to="/" >Advicy</Link>
                    <Router>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <div className="navbar-text">John Snow</div>
                        </li>
                        <li>
                           <Link to='/myProfile' className="glyphicon glyphicon-user" aria-hidden="true" onClick={this.refresh}></Link>
                        </li>
                        <li> 
                             <a href="#" className="glyphicon glyphicon-log-out" aria-hidden="true"></a>
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