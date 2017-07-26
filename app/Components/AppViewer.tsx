import * as React from "react"
import {MainPage} from "Components/Pages/MainPage"


export class AppViewer extends React.Component <{},{}>
{
    render(){
        return (
            <div className = "spacing-bottomtop">
               <MainPage/>
            </div>
        );
    }
}