import * as React from "react"
import {Header} from "Components/Header"
import {AppViewer} from "Components/AppViewer"
import {Footer} from "Components/Footer"
import { BrowserRouter } from 'react-router-dom'

export class App extends React.Component<{}, {}>
{
    render()
    {
        return(  
        <BrowserRouter>
            <div className = "App">
                <Header/>
                <div className="col col-lg-6">
                    <AppViewer/>
                </div>

            </div>
        </BrowserRouter>
        );
    }
}