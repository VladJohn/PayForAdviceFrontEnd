import * as React from "react"
import { Price } from "Components/Elements/Price"

export class AskAdvice extends React.Component<{idResponder : number, idAsker : number}, { question: string, price: string }>
{

    baseUrl: string = 'http://localhost:52619/api/question/?idResponder=';
    headers: Headers;
    ///NEED TO ADD EVENT FOR FILE UPLOAD and prices
    constructor() {
        super();
        this.state = { question: '', price: '' };
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    postData(){
        var cats: any;
        var ceva = {QuestionText: this.state.question, UserId: this.props.idAsker}
        var form2 = JSON.stringify(ceva);
        console.log(form2);
        cats = '';
        return fetch(this.baseUrl+this.props.idResponder, {method : "POST", body: form2, headers:this.headers})
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    handleQuestion(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ question: event.currentTarget.value });
    }
    handlePrice(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ price: event.currentTarget.value });
    }
    handleSubmit(e :any){
        e.preventDefault();
        this.postData();
    }

    render() {
        return (
            <div className="row">
                <h3>Ask for advice:</h3>
                <form id="ask">
                    <textarea className="form-control spacing" name="question" rows={8} placeholder='Ask your question here.' onChange={this.handleQuestion} />
                    <p>Upload files that can help with understanding your question better(optional):</p>
                    <input className="spacing" type="file" />
                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value="premium" name="price" onChange={this.handlePrice} />
                            <Price price={15.4} details="Get premium advice in 24h" order="premium"></Price>
                        </div>
                    </div>


                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value="extra" name="price" onChange={this.handlePrice} />
                            <Price price={8.4} details="Get extra advice in 4 days" order="extra"></Price>
                        </div>
                    </div>

                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value="basic" name="price" onChange={this.handlePrice} />
                            <Price price={2.4} details="Get basic advice in 7 days" order="basic"></Price>
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} className="btn btn-primary" >Submit</button>
                </form>
            </div>
        );
    }
};