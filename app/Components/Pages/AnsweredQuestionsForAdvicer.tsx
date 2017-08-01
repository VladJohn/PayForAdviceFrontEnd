import * as React from 'react'

export class AnsweredQuestionsForAdvicer extends React.Component<{questionText : string, questionAnswer : string, rating : number}, {}>
{
    constructor() {
        super();
    }
    render() {
        return (
            <div>
            <div className="col-md-9">
                <h2> {this.props.questionText}</h2>
                <h3> {this.props.questionAnswer}</h3>
            </div>
            <div className="col-md-3">
                <br />
                <h4>Your rating was: </h4>
                <h4 className = "text-center"> {this.props.rating}</h4>
                <button type="button" className="btn btn-primary">
                    Share on facebook!
                </button>
            </div>
            </div>
        );
    }
}