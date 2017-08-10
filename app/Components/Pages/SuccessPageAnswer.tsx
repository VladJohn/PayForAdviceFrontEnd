import * as React from 'react'

export class SuccessPageAnswer extends React.Component<{},{}>{


componentDidMount()
{
    setTimeout(function() { 
        window.location.replace("/")}, 3000);
}

    render() {
        return (
            <div>
            <h4>
                Your answer has been sent!<br/><br/> 
            </h4>
            You will be redirected in a few moments...
            </div>
        );
    }
}