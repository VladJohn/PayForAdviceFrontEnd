import * as React from "react"
import {Menu} from "Components/Elements/Menu"

export class AppViewer extends React.Component <{},{}>
{
    render(){
        return (
            <div className = "AppViewer">
                <p>This is a body.
                    <Menu/>
                </p>
            </div>
        );
    }
}