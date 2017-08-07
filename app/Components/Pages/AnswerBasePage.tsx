import * as React from 'react'

export class AnswerBasePage extends React.Component <{idUser:number},{ rating: string, report:string, ans:any, q:any, success:boolean,}>{
    baseUrl: string = 'http://localhost:52619/api/answer/?idQuestion=';
    baseUrl2: string = 'http://localhost:52619/api/question/?idQuestion=';
    baseUrl3: string = 'http://localhost:52619/api/answer/';
    headers: Headers;
    
    constructor() {
    super();
    this.state = {rating:'', report:'', ans: "", q:'', success : false };
    this.handleReport = this.handleReport.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitRating = this.handleSubmitRating.bind(this);
    this.shareOnFb = this.shareOnFb.bind(this);
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    putDataReport() {
        var cats: any;
        cats = '';
        var something = this.baseUrl3 + "?id=" + this.state.ans.Id + "&report=" + this.state.report;
        console.log(something);
        return fetch(something, { method: "PUT", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failed! Try again', error)
            })
    }

    putDataRating() {
        var cats: any;
        cats = '';
        var something = this.baseUrl3 + "?id=" + this.state.ans.Id + "&rating=" + this.state.rating;
        console.log(something);
        return fetch(something, { method: "PUT", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failed! Try again', error)
            })
    }

    handleReport(event : React.FormEvent<HTMLTextAreaElement>){
                this.setState({report:event.currentTarget.value});
        }
    handleRating(event : React.FormEvent<HTMLInputElement>){
                this.setState({rating:event.currentTarget.value});
        }
    handleSubmitRating(event : any)
    {
        event.preventDefault();
        this.putDataRating();
    }
    handleSubmit(event : any){
        event.preventDefault();
        this.putDataReport();
    }

    shareOnFb()
    {
        var cats: any;
        cats = '';
        var something = this.baseUrl3 + "?idAnswer=" + this.state.ans.Id;
        console.log(something);
        return fetch(something, { method: "POST", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
                alert("Message shared");
            })
            .catch(function (error) {
                console.log('request failed! Try again', error)
            })
    }

      componentDidMount()
        {
            var res: any ;
            res ="";
            return fetch(this.baseUrl + this.props.idUser)
                .then((response) => response.json())
                .then(function (data) {
                    res = data;
                    console.log(data, res);
                })
                .then(() => (
                    this.setState({ ans: res, success : true })
                ))
                .then(()=>{this.getQText()})
                .catch(function (error) {
                    console.log('request failed', error)
                })
        }

        getQText(){
            var res: any ;
            res ="";
            return fetch(this.baseUrl2 + this.state.ans.QuestionId)
                .then((response) => response.json())
                .then(function (data) {
                    res = data;
                    console.log(data, res);
                })
                .then(() => (
                    this.setState({ q: res })
                ))
                .catch(function (error) {
                    console.log('request failed', error)
                })
        }

    render(){
        let message = null;
        if (this.state.success==true)
        {
            message = <div className="spacing alert alert-success"> <strong>Success!</strong> Your rating has been sent.</div>
        }
       let answer = null;
       let fb = null;
      if (this.state.q.Status =="refunded"){
            answer = <div>The adviser refused to answer this question or the time limit expired. Your money has been refunded.</div>}
        else if (this.state.q.Status =="solved"){
            fb = <img className="small-icon" onClick={this.shareOnFb} src="/pictures/fb.png"></img>
            answer =
                <div>    
                    {this.state.ans.AnswerText}                
                    <div>
                        <label>
                            Rate:
                        </label>
                        <br/>
                        
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="spacing-right">
                                    <input type="radio" value="1" name="rating" onChange={this.handleRating}/>1
                                </div>
                                <div className="spacing-right">
                                    <input type="radio" value="2" name="rating" onChange={this.handleRating}/>2
                                </div>
                                <div className="spacing-right">
                                    <input type="radio" value="3" name="rating" onChange={this.handleRating}/>3
                                </div>
                                <div className="spacing-right">
                                    <input type="radio" value="4" name="rating" onChange={this.handleRating}/>4
                                </div>
                                <div className="spacing-right">
                                    <input type="radio" value="5" name="rating" onChange={this.handleRating}/>5
                                </div>
                            </div>
                        </div>
                        
                        <div className="col col-md-14">
                        <form>
                            <button className="btn blue-button" onClick={this.handleSubmitRating}>send rating now</button>
                        </form>
                        {message}
                        </div>

                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <div>
                            <label>Copy this into your browser's URL to download files sent by advisor:</label>
                        </div>
                        <div>
                            <label>{this.state.ans.url}</label>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>

                    <form>
                        Was the answer you received unhelpful, offensive or spam? Report it:
                        <textarea className="form-control spacing" name="report" rows={3} placeholder='Type your report message here.' onChange={this.handleReport}/>
                        <button className="btn blue-button spacing" onClick={this.handleSubmit}>send report</button>
                    </form>
                    </div>
        }
else {
    answer = <div>Your question hasn't been answered yet. Come back later.</div>
}
        return (
            <div>
                    <span>
                        
                        <h3>{this.state.q.QuestionText}{fb}</h3> 
                        {answer}
                    </span>

            </div>
        );
    }

}