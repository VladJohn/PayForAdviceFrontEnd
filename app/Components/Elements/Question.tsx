import * as React from "react"
import {AnswerBasePage} from 'Components/Pages/AnswerBasePage'

export class Question extends React.Component<{type : string,id:number, question: string, status: number, date: string, ordine:string}, {}>
{
  render() {
    let status = null;
    if (this.props.status == 0){
          status = <span>pending</span>
      }
    else if (this.props.status == 1){
        status = <span>solved</span>
    }
      else{
        status = <span>refunded</span>
      }

    return (
      <div className="row">
        <div >
          <div className="col-md-11"><h2> {this.props.question}</h2> </div>
          <div className="col-md-6" >
            <i>
              {status} / {this.props.date} / {this.props.ordine} price
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