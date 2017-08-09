import * as React from 'react'

export class AnsweredQuestionsForAdvicer extends React.Component<{ id: number }, { answer : any, question: any }>
{
    baseUrl: string = 'http://localhost:52619/api/question/?idQuestion=';
    baseUrl2: string = 'http://localhost:52619/api/answer/?idQuestion=';
    baseUrl3: string = 'http://localhost:52619/api/answer/?';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = { question : "", answer : ""};
        this.shareRatingOnFb = this.shareRatingOnFb.bind(this);
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
            .then(() => 
                this.getAnswerText()
            )
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    getAnswerText(){
            var res: any ;
            res ="";
            return fetch(this.baseUrl2 + this.state.question.Id)
                .then((response) => response.json())
                .then(function (data) {
                    res = data;
                    console.log(data, res);
                })
                .then(() => (
                    this.setState({ answer : res })
                ))
                .catch(function (error) {
                    console.log('request failed', error)
                })
        }
    
    shareRatingOnFb(){
        var cats: any;
        cats = '';
        var something = this.baseUrl3 + "rating=" + this.state.answer.Rating;
        console.log(something);
        return fetch(something, { method: "POST", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failed! Try again', error)
            })
    }

    render() {
        let fb = null;
        if(localStorage.getItem('fbLogged')==='true')
            fb = <button onClick={this.shareRatingOnFb} type="button" className="btn blue-button">
                        Share on facebook!
                    </button>
        else
            fb = null;
        return (
            <div>
                <div className="col-md-8">
                    <h2> {this.state.question.QuestionText}</h2>
                    <p> {this.state.answer.AnswerText}</p>
                </div>
                <div className="col-md-4">
                    <br />
                    <h4>Your rating was: {this.state.answer.Rating}</h4>
                    {fb}
                </div>
            </div>
        );
    }
}