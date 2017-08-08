import * as React from 'react';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class SignUpPreferencePage extends React.Component <{},{}>{

    render() {
        return (
            <div>
                <Link to="/register" className="btn blue-button spacing">Sign up as base user</Link><br/>
                This option will let you ask people for advice and rate them accordingly. <br/> <br/>
                <br/> 
                <Link to="/registerAdviser" className="btn blue-button spacing">Sign up as adviser</Link> <br/> 
                This option will let you be asked for advice in a certain field. In order to become an advicer, an administrator will have to verify your personal information.<br/>
                You can also ask other people for adive.
            </div>
        );
    }
}