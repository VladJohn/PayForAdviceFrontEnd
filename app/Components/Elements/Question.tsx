import * as React from "react"

export class Question extends React.Component<{ question: string, status: string, date: string, userName: string }, {}>
{
  render() {
    return (
      <div className="row">
        <div >
          <div className="col-md-11"><h3> {this.props.question}</h3> </div>
          <div className="col-md-6" >
            <i>
              {this.props.status} {this.props.date}
            </i>
          </div>
          <div className = "col-md-6 center text-right">
            <b>
              {this.props.userName}
            </b>
          </div>
        </div>
      </div>
    );
  }
}