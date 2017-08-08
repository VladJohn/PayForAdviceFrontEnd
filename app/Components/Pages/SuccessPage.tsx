import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

export class SuccessPage extends React.Component<{},{}>{

    render() {
        return (
            <div>
            <h3>
                Signed up successfully!
            </h3>
                <Link to="/" className="btn blue-button">Login</Link>
            </div>
        );
    }
}