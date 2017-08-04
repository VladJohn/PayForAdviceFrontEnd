import * as React from 'react'

export class Success extends React.Component<{ }, { }>{

    redirect()
    {
        setTimeout(()=> (window.location.replace("/")), 2000);
    }

    render() {
        return (
            <div >
               <h2> 
                   Your message has been sent!
                   {this.redirect()}
               </h2>
            </div>
        );
    }
}