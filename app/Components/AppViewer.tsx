import * as React from "react"
import {SignUp} from "Components/Pages/SignUpPage"

export class AppViewer extends React.Component <{},{}>
{
    render(){
        return (
            <div className = "AppViewer">
                <p>This is a body.
                    <SignUp/>
                </p>
            </div>
        );
    }
}