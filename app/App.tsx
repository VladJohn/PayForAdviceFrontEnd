import * as React from "react"
import {Header} from "Components/Header"
import {AppViewer} from "Components/AppViewer"
import {Footer} from "Components/Footer"

export class App extends React.Component<{}, {}>
{
    render()
    {
        return(
            <div className = "App">
                    <Header/>
                    <AppViewer/>
                    <Footer/>
            </div>
        );
    }
}