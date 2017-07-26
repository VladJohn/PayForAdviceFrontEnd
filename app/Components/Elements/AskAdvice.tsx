import * as React from "react"
import {Price} from "Components/Elements/Price"

export class AskAdvice extends React.Component<{},{question:string, price:string}>
{
    ///NEED TO ADD EVENT FOR FILE UPLOAD
    constructor() {
    super();
    this.state = {question:'', price:''};
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleQuestion(event : React.FormEvent<HTMLTextAreaElement>){
                this.setState({question:event.currentTarget.value});
        }
    handlePrice(event : React.FormEvent<HTMLInputElement>){
                this.setState({price:event.currentTarget.value});
        }
    handleSubmit(event : React.FormEvent<HTMLInputElement>){

    }

    render(){
        return (
            <div className="row">
                    <h3>Ask for advice:</h3>
                    <form>
                    <textarea className="form-control spacing" name="question" rows={8} placeholder='Ask your question here.' onChange={this.handleQuestion}/>
                    <p>Upload files that can help with understanding your question better(optional):</p>
                    <input className="spacing" type="file"/>
                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value="premium" name="price" onChange={this.handlePrice}/>
                            <Price price={15.4} details="Get premium advice in 24h" order="premium"></Price>
                        </div>
                    </div>

                    
                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value="extra" name="price" onChange={this.handlePrice}/>
                            <Price price={8.4} details="Get extra advice in 4 days" order="extra"></Price>
                        </div>
                    </div>

                    <div className="col col-md-4 panel panel-default">
                        <div className="panel-body">
                            <input type="radio" value="basic" name="price" onChange={this.handlePrice}/>
                            <Price price={2.4} details="Get basic advice in 7 days" order="basic"></Price>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary"/>
                    </form>
            </div>
        );
    }
};