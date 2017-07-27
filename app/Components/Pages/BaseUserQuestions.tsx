import * as React from "react"
import { Header } from "Components/Header"
import { AppViewer } from "Components/AppViewer"
import { Footer } from "Components/Footer"
import { Question } from "Components/Elements/Question"
import { ListView } from "Components/Elements/ListView"

export class BaseUserQuestions extends React.Component<{}, {}>
{
    constructor() {
        super();
    }
    render() {
        return (
            <div className="row">
                <div className = "col-md-8" >
                    <ListView elements={[<Question question = "Azi o sa ploua jknbjdsbfd fjd gjdfbgjkdf kgjsd kgjnfk?" status = "pending" date = "19/08/2017" userName ="OlafDKNFMKSD FD GRNEDJGFSDE FD" />, 
                                            <Question question = "Cat de multa apa exista pe Pamant??" status = "answered" date = "26/07/2017" userName ="Miau" />]} />
                </div>
                <div className = "col-md-4">
                    <ul className="nav nav-pills nav-stacked">
                    <li role="presentation" className="active"><a href="#">By status</a></li>
                    <li role="presentation"><a href="#">By date</a></li>
                </ul>
                </div>
            </div>
        );
    }
}