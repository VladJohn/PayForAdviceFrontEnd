import * as React from "react"
import {Menu} from "Components/Elements/Menu"

export class Header extends React.Component <{},{}>
{
    render(){
        return (
            <div>
            <nav className="navbar navbar-default"> 
                <div className="col col-lg-3"></div>
                <div className="container-fluid col col-lg-6">
                    <a className="navbar-brand" href="#">Advicy</a>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <div className="navbar-text">John Snow</div>
                        </li>
                        <li>
                            <a href="#" className="glyphicon glyphicon-user" aria-hidden="true"></a>
                        </li>
                        <li> 
                             <a href="#" className="glyphicon glyphicon-log-out" aria-hidden="true"></a>
                        </li>
                    </ul>
                </div>
                <div className="col col-lg-3"></div>
            </nav>
            <Menu/>
            </div>
        );
    }
}