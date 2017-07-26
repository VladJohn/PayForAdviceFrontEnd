import * as React from 'react'
import {Nav, NavItem} from 'react-bootstrap'

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

    render()
    {
        return(
            <div className='menu'>
                <div className="col col-lg-3"></div>
                <Nav bsStyle="pills">
                    <NavItem onSelect={this.handleSelect}>Home</NavItem>
                    <NavItem onSelect={this.handleSelect}>My Questions</NavItem>
                </Nav>
                <div className="col col-lg-3"></div>
            </div>
        );
    }
}