import * as React from "react"
import { Question } from "Components/Elements/Question"

export class Answer extends React.Component<{ idQuestion: number }, { idAnswer: number, answer: string, success: boolean, errorPost: string }>
{
    refundedQuestionUrl: string = 'http://localhost:52619/api/question/?idQuestion='
    putAnswerUrl: string = 'http://localhost:52619/api/answer/';
    pendingQuestionsUrl: string = 'http://localhost:52619/api/answer/?idQuestionPending=';
    headers: Headers;

    constructor() {
        super();
        this.state = { idAnswer: 0, answer: '', success: false, errorPost: '' };
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitRefusal = this.handleSubmitRefusal.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    componentDidMount() {
        var pendingQuestion: any;
        pendingQuestion = '';
        return fetch(this.pendingQuestionsUrl + this.props.idQuestion)
            .then((response) => response.json())
            .then(function (data) {
                pendingQuestion = data;
                console.log(pendingQuestion);
            })
            .then(() => {
                this.setState({ idAnswer: pendingQuestion.Id });
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    putData() {
        var answer: any;
        answer = '';
        var bodyInformation = { id: this.state.idAnswer, AnswerText: this.state.answer }
        var bodyJSON = JSON.stringify(bodyInformation);
        console.log(bodyJSON);
        let that = this;
        return fetch(this.putAnswerUrl, { method: "PUT", body: bodyJSON, headers: this.headers })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then(() =>that.refresh())
                } else {
                    return response.json()
                        .then(function (error) {
                            that.setState({ errorPost: error.Message })
                        });
                }
            })
            .then(function (data) {
                answer = data;
                console.log(answer);
                
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    refresh() {
        window.location.replace("/successAnswer");
    }

    putRefundedStatus() {
        var refundedQuestion: any;
        refundedQuestion = '';
        var bodyInformation = { idQuestion: this.props.idQuestion }
        var bodyJSON = JSON.stringify(bodyInformation);
        console.log(bodyJSON);
        return fetch(this.refundedQuestionUrl + this.props.idQuestion, { method: "PUT", body: bodyJSON, headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                refundedQuestion = data;
                console.log(refundedQuestion);
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    handleAnswer(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ answer: event.currentTarget.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.putData();
    }

    handleSubmitRefusal(event: any) {
        event.preventDefault();
        this.putRefundedStatus();
    }


    render() {
        let message = null;
        if (this.state.success == true) {
            message = <div className="spacing alert alert-success"> <strong>Success!</strong> Your answer has been sent.</div>
        }
        else if (this.state.errorPost != '') {
            message = <div className="spacing alert alert-danger alert-container"> {this.state.errorPost}</div>
        }
        return (
            <div className="spacing">
                <h4><i>Add your response:</i></h4>
                <textarea className="form-control " rows={9} onChange={this.handleAnswer}></textarea>
                <div className="spacing col-md-10 text-left">
                    <input type="file" />
                </div>
                <div className="spacing col-md-2 text-right" >
                    <button type="button" className="btn grey-button" aria-label="Left Align">

                        <span className="glyphicon glyphicon-download-alt" aria-hidden="true">
                        </span>
                        <span> Download Files </span>
                    </button>
                </div>
                <button className="spacing btn spacing-right blue-button" onClick={this.handleSubmit}> Answer</button>
                <button className="spacing btn grey-button" onClick={this.handleSubmitRefusal} > Refuse to answer</button>
                {message}
            </div>
        );
    }
}