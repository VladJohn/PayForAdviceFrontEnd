import * as React from "react"
import { Price } from "Components/Elements/Price"

export class AskAdvice extends React.Component<{ idResponder: number, idAsker: number }, { errorPost: string, question: string, base: number, normal: number, premium: number, success: boolean, baseDetail: string, normalDetail: string, premiumDetail: string, order: string }>
{
    postQuestionUrl: string = 'http://localhost:52619/api/question/?idResponder=';
    publicProfileUrl: string = 'http://localhost:52619/api/price/?userId=';
    headers: Headers;

    constructor() {
        super();
        this.state = { question: '', base: 0, normal: 0, premium: 0, success: false, baseDetail: '', normalDetail: '', premiumDetail: '', order: '', errorPost: "" };
        this.handleQuestion = this.handleQuestion.bind(this);
        this.handlePricePremium = this.handlePricePremium.bind(this);
        this.handlePriceNormal = this.handlePriceNormal.bind(this);
        this.handlePriceBase = this.handlePriceBase.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    componentDidMount() {
        var profile: any;
        profile = '';
        console.log(this.props.idResponder);
        return fetch(this.publicProfileUrl + this.props.idResponder)
            .then((response) => response.json())
            .then(function (data) {
                profile = data;
            })
            .then(() => (
                this.setState({ base: profile.Base, normal: profile.Normal, premium: profile.Premium, baseDetail: profile.DetailBase, normalDetail: profile.DetailNormal, premiumDetail: profile.DetailPremium })
            ))
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    postData() {
        var postedQuestion: any;
        var bodyInformation = { QuestionText: this.state.question, UserId: this.props.idAsker, Order: this.state.order }
        var bodyJSON = JSON.stringify(bodyInformation);
        console.log(bodyJSON);
        postedQuestion = '';
        let that = this;
        return fetch(this.postQuestionUrl + this.props.idResponder, { method: "POST", body: bodyJSON, headers: this.headers })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then(() => this.setState({success:true}))
                } else {
                    return response.json()
                        .then(function (error) {
                            that.setState({errorPost: error.Message})
                        });
                }})
            .then(function (data) {

                postedQuestion = data;
                console.log(postedQuestion);
            })

    }

    handleQuestion(event: React.FormEvent<HTMLTextAreaElement>) {
        this.setState({ question: event.currentTarget.value });
    }

    handlePricePremium(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ premium: parseFloat(event.currentTarget.value), order: 'premium' });
    }

    handlePriceNormal(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ normal: parseFloat(event.currentTarget.value), order: 'standard' });
    }

    handlePriceBase(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ base: parseFloat(event.currentTarget.value), order: 'basic' });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.postData();
    }

    render() {
        let message = null;
        if (this.state.success == true) {
            message = <div className="spacing alert alert-success"> <strong>Success!</strong> Your question has been asked.</div>
        }
        else if (this.state.errorPost != '') {
            message = <div className="spacing alert alert-danger alert-container"> {this.state.errorPost}</div>
        }
        return (
            <div className="row">
                <h3>Ask for advice:</h3>
                <form id="ask">
                    <textarea className="form-control spacing" name="question" rows={8} placeholder='Ask your question here.' onChange={this.handleQuestion} />
                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value={this.state.premium} name="price" onChange={this.handlePricePremium} />
                            <Price price={this.state.premium} details={this.state.premiumDetail} order="PREMIUM PRICE"></Price>
                        </div>
                    </div>
                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value={this.state.normal} name="price" onChange={this.handlePriceNormal} />
                            <Price price={this.state.normal} details={this.state.normalDetail} order="STANDARD PRICE"></Price>
                        </div>
                    </div>
                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value={this.state.base} name="price" onChange={this.handlePriceBase} />
                            <Price price={this.state.base} details={this.state.baseDetail} order="BASE PRICE"></Price>
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} className="btn blue-button" >Submit</button>
                </form>
                {message}
            </div>
        );
    }
};