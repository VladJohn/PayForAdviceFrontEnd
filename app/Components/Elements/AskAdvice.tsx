import * as React from "react"
import {Price} from "Components/Elements/Price"

export class AskAdvice extends React.Component<{},{}>
{
  render(){
    return (
        <div className="row">
                <h3>Ask for advice:</h3>
                <form>
                <textarea className="form-control spacing" name="question" rows={8}/>
                <p>Upload files that can help with understanding your question better(optional):</p>
                <input className="spacing" type="file"/>
                <div className="col col-md-4 panel panel-default">
                    <div className="panel-body">
                        <input type="radio" value="premium" name="price"/>
                          <Price price={15.4} details="Get premium advice in 24h" order="premium"></Price>
                    </div>
                </div>

                
                <div className="col col-md-4 panel panel-default">
                    <div className="panel-body">
                        <input type="radio" value="extra" name="price"/>
                          <Price price={8.4} details="Get premium advice in 4 days" order="extra"></Price>
                    </div>
                </div>

                <div className="col col-md-4 panel panel-default">
                    <div className="panel-body">
                        <input type="radio" value="premium" name="price"/>
                          <Price price={2.4} details="Get premium advice in 7 days" order="basic"></Price>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary"/>
                </form>
        </div>
    );
  }
};