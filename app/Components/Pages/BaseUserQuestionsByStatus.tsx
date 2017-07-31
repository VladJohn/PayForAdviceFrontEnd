import * as React from "react"
import { Header } from "Components/Header"
import { AppViewer } from "Components/AppViewer"
import { Footer } from "Components/Footer"
import { Question } from "Components/Elements/Question"
import { ListView } from "Components/Elements/ListView"

export class BaseUserQuestionsByStatus extends React.Component<{idUser: number}, {adviserQuestions: Array<any>}>
{
    baseUrl: string = 'http://localhost:52619/api/question/?IdUser=';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = {
            adviserQuestions: []
        };
    }

    componentDidMount() {
        var user: any[];
        user = [];
        return fetch(this.baseUrl + this.props.idUser)
            .then((response) => response.json())
            .then(function (data) {
                user = data;
            })
            .then(() => (
                this.setState({ adviserQuestions: user })
            ))
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    render() {
        return (
            <div className="row">
                <div className = "col-md-8" >
                    <ListView elements={
                    this.state.adviserQuestions.map(function (object, i) {
                        return <Question question={object.QuestionText} status={object.Status} date={object.Date.substring(0,10)} userName = "" />;
                    }
                    )
                } />
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