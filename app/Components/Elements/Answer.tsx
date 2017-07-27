import * as React from "react"
import { Question } from "Components/Elements/Question"

export class Answer extends React.Component<{ question: string }, {}>
{
    render() {
        return (
            <div className="col-md-12">
            <h2> {this.props.question}</h2>
                <br />
                  <div className="form-group col-md-12">
                    <h4><i>Add your response:</i></h4>
                    <textarea className="form-control " rows={9}></textarea>
                </div> 
                <div>
                    <div className="col-md-10 text-left">  
                        <input type="file" />
                    </div>
                    <div className="col-md-2 text-right" >
                        <button type="button" className="btn btn-default" aria-label="Left Align">
                            <span className="glyphicon glyphicon-download-alt" aria-hidden="true">
                            </span>
                        </button>
                        <button className="btn btn-primary"> Answer</button>
                    </div>
                </div>
            </div>
        );
    }
}