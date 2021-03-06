import * as React from 'react'
import { Answer } from "Components/Elements/Answer"

export class PendingQuestionsForAdvicer extends React.Component<{ id: number }, { question: any }>
{
    baseUrl: string = 'http://localhost:52619/api/question/?idQuestion=';
    baseUrl2: string = 'http://localhost:52619/api/answer/?idQuestion=';
    baseUrl3: string = 'http://localhost:52619/api/answer/?';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = { question: "" };
    }
    componentWillMount() {
        var userData: any;
        return fetch(this.baseUrl + this.props.id)
            .then((response) => response.json())
            .then(function (data) {
                userData = data;
                console.log('request ok', data)
            })
            .then(() => (
                this.setState({ question: userData })
            ))
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    render() {
        if (localStorage.getItem("token")) {
            return (
                <div>
                    <div className="col-md-12">
                        <h2> {this.state.question.QuestionText}</h2>
                        <Answer idQuestion={this.props.id} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div> You are not logged in!</div>
            )
        }
    }

}