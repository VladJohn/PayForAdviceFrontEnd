import * as React from 'react'

export class AnswerBasePage extends React.Component <{idUser:number},{ rating: string, report:string, ans:any, q:any}>{
    baseUrl: string = 'http://localhost:52619/api/answer/?idQuestion=';
    baseUrl2: string = 'http://localhost:52619/api/question/?idQuestion=';
    headers: Headers;
    
    constructor() {
    super();
    this.state = {rating:'', report:'', ans: "", q:'' };
    this.handleReport = this.handleReport.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    


    handleReport(event : React.FormEvent<HTMLTextAreaElement>){
                this.setState({report:event.currentTarget.value});
        }
    handleRating(event : React.FormEvent<HTMLInputElement>){
                this.setState({rating:event.currentTarget.value});
        }
    handleSubmit(event : React.FormEvent<HTMLInputElement>){

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
        //this.getQText();
        return (
            <div className="row">
                    <span>
                        <h3>{this.state.q.QuestionText}</h3>
                        <p>{this.state.ans.AnswerText}</p>
                    </span>
                    <div>
                        <label>
                            Rate Now:
                        </label>
                        <br/>
                        <div className="col col-md-4 panel panel-default spacing-right">
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
                        <div className="col col-md-12"></div>
                        <button className="btn btn-primary">Share on Facebook</button>
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
                    <form>
                        <textarea className="form-control spacing" name="report" rows={3} placeholder='Type your report message here.'/>
                        <input type="submit" className="btn btn-primary" value="Send Report"/>
                    </form>
            </div>
        );
    }

}