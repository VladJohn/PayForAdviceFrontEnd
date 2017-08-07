import * as React from "react"
import {AnswerBasePage} from 'Components/Pages/AnswerBasePage'

export class Question extends React.Component<{type : string,id:number, question: string, status: string, date: string, ordine:string}, {}>
{
  render() {
    return (
      <div className="row">
        <div >
          <div className="col-md-11"><h2> {this.props.question}</h2> </div>
          <div className="col-md-6" >
            <i>
              {this.props.status} / {this.props.date} / {this.props.ordine} price
            </i>
          </div>
          <div className = "col-md-6 center text-right">
            <b>
            </b>
          </div>
        </div>
      </div>
    );
  }
}