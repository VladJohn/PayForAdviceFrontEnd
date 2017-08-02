import * as React from 'react'

export class AnswerBasePage extends React.Component <{idUser:number},{ rating: string, report:string, ans:any, q:any}>{
    baseUrl: string = 'http://localhost:52619/api/answer/?idQuestion=';
    baseUrl2: string = 'http://localhost:52619/api/question/?idQuestion=';
    baseUrl3: string = 'http://localhost:52619/api/answer/';
    headers: Headers;
    
    constructor() {
    super();
    this.state = {rating:'', report:'', ans: "", q:'' };
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
                    this.setState({ ans: res })
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
        return (
            <div>
                    <span>
                        
                        <h3>{this.state.q.QuestionText}<img className="small-icon" onClick={this.shareOnFb} src="/pictures/fb.png"></img></h3>
                        <p>{this.state.ans.AnswerText}</p>
                    </span>
                    <div>
                        <label>
                            Rate:
                        </label>
                        <br/>
                        <div className="row">
                        <div className="col col-md-3 panel panel-default">
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
                        <div className="col col-md-9"></div>
                        </div>
                        <div className="col col-md-1">
                        <form>
                            <button className="btn btn-primary" onClick={this.handleSubmitRating}>Send Rating</button>
                        </form>
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
                    <br/>
                    <br/>
                    <br/>
                    <form>
                        <textarea className="form-control spacing" name="report" rows={3} placeholder='Type your report message here.' onChange={this.handleReport}/>
                        <button className="btn btn-primary spacing" onClick={this.handleSubmit}>Send Report</button>
                    </form>
            </div>
        );
    }

}