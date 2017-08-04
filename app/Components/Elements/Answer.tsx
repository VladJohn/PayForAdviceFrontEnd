import * as React from "react"
import { Question } from "Components/Elements/Question"

export class Answer extends React.Component<{ idQuestion : number }, { idAnswer : number, answer : string}>
{

    baseUrl: string = 'http://localhost:52619/api/question/';
    baseUrl2: string = 'http://localhost:52619/api/answer/';
    headers: Headers;
    ///NEED TO ADD EVENT FOR FILE UPLOAD and prices
    constructor() {
        super();
        this.state = { idAnswer : 0, answer: ''};
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitRefusal = this.handleSubmitRefusal.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    componentDidMount()
    {
        var cats: any;
        cats = '';
        return fetch(this.baseUrl2+"?idQuestionPending="+this.props.idQuestion)
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
            })
            .then(() => 
                    {
                        this.setState({ idAnswer:cats.Id});
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }
    
    putData()
    {
        var cats: any;
        var ceva = {id : this.state.idAnswer, AnswerText:this.state.answer}
        var form2 = JSON.stringify(ceva);
        console.log(form2);
        cats = '';
        return fetch(this.baseUrl2, {method : "PUT", body: form2, headers:this.headers})
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    putRefundedStatus()
    {
        var cats: any;
        var ceva = {idQuestion : this.props.idQuestion}
        var form2 = JSON.stringify(ceva);
        console.log(form2);
        cats = '';
        return fetch(this.baseUrl+"?idQuestion="+this.props.idQuestion, {method : "PUT", body: form2, headers:this.headers})
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    handleAnswer(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ answer: event.currentTarget.value });
    }

    handleSubmit(e :any){
        e.preventDefault();
        this.putData();
        window.location.replace("/success");
    }

    handleSubmitRefusal(e :any){
        e.preventDefault();
        this.putRefundedStatus();
    }

    
    render() {
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
                            <span> download files </span>
                        </button>
                        
                    </div>
               
                <button className="spacing btn spacing-right blue-button"  onClick={this.handleSubmit}> Answer</button>
                <button className="spacing btn grey-button" onClick={this.handleSubmitRefusal} > Refuse to answer</button>
            </div>
        );
    }
}