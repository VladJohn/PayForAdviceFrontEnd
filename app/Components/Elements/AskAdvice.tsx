import * as React from "react"
import { Price } from "Components/Elements/Price"

export class AskAdvice extends React.Component<{idResponder : number, idAsker : number}, { question: string, base:number, normal:number, premium:number,success:boolean,baseDetail:string, normalDetail:string, premiumDetail:string, order:string}>
{

    baseUrl: string = 'http://localhost:52619/api/question/?idResponder=';
    baseUrl2: string = 'http://localhost:52619/api/price/?idUser=';
    headers: Headers;
    ///NEED TO ADD EVENT FOR FILE UPLOAD and prices
    constructor() {
        super();
        this.state = { question: '', base:0, normal:0, premium:0, success:false, baseDetail:'', normalDetail:'', premiumDetail:'', order:''};
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handlePricePremium = this.handlePricePremium.bind(this);
        this.handlePriceNormal = this.handlePriceNormal.bind(this);
        this.handlePriceBase = this.handlePriceBase.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    componentDidMount()
    {
        var cats: any;
        cats = '';
        console.log(this.props.idResponder);
        return fetch(this.baseUrl2 + this.props.idResponder)
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(data);
            })
            .then(() => (
                this.setState({ base: cats.Base, normal:cats.Normal, premium:cats.Premium, baseDetail:cats.DetailBase, normalDetail:cats.DetailNormal, premiumDetail:cats.DetailPremium })
            ))
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    postData(){
        var cats: any;
        var ceva = {QuestionText: this.state.question, UserId: this.props.idAsker, Order: this.state.order}
        var form2 = JSON.stringify(ceva);
        console.log(form2);
        cats = '';
        return fetch(this.baseUrl+this.props.idResponder, {method : "POST", body: form2, headers:this.headers})
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .then(() => this.setState({success: true}))
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    handleQuestion(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ question: event.currentTarget.value });
    }
    handlePricePremium(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ premium: parseFloat( event.currentTarget.value) , order:'premium'});
    }
    handlePriceNormal(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ normal: parseFloat( event.currentTarget.value) , order:'standard'});
    }
    handlePriceBase(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ base: parseFloat( event.currentTarget.value) , order:'basic'});
    }
    handleSubmit(e :any){
        e.preventDefault();
        this.postData();
    }

    render() {
         let message = null;
        if (this.state.success==true)
            {
                message = <div className="spacing alert alert-success"> <strong>Success!</strong> Your question has been asked.</div>
            }
        return (
            <div className="row">
                <h3>Ask for advice:</h3>
                <form id="ask">
                    <textarea className="form-control spacing" name="question" rows={8} placeholder='Ask your question here.' onChange={this.handleQuestion} />
                    <p>Upload files that can help with understanding your question better(optional):</p>
                    <input className="spacing" type="file" />
                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value={this.state.premium} name="price" onChange={this.handlePricePremium} />
                            <Price price={this.state.premium} details={this.state.premiumDetail} order="premium price"></Price>
                        </div>
                    </div>


                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value={this.state.normal} name="price" onChange={this.handlePriceNormal} />
                            <Price price={this.state.normal} details={this.state.normalDetail} order="standard price"></Price>
                        </div>
                    </div>

                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value={this.state.base} name="price" onChange={this.handlePriceBase} />
                            <Price price={this.state.base} details={this.state.baseDetail} order="base price"></Price>
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} className="btn blue-button" >Submit</button>
                </form>
                {message}
            </div>
        );
    }
};