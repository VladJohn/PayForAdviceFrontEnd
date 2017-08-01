import * as React from 'react'

export class AnsweredQuestionsForAdvicer extends React.Component<{ id: number }, { question: any }>
{
    baseUrl: string = 'http://localhost:52619/api/question/?userId=';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = { question : "" };
    }
    componentDidMount() {
        var userData: any;
        return fetch(this.baseUrl + this.props.id)
            .then((response) => response.json())
            .then(function (data) {
                userData = data;
                console.log('request ok', data)
            })
            .then(() => (
                this.setState({ question : userData })
            ))
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    render() {
        return (
            <div>
                <div className="col-md-9">
                    <h2> {this.state.question.QuestionText}</h2>
                    <h3> Answer</h3>
                </div>
                <div className="col-md-3">
                    <br />
                    <h4>Your rating was: </h4>
                    <h4 className="text-center"> Rating</h4>
                    <button type="button" className="btn btn-primary">
                        Share on facebook!
                </button>
                </div>
            </div>
        );
    }
}