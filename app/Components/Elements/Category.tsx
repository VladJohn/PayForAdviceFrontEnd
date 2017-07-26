import * as React from "react"

export class Category extends React.Component<{imgurl: string, name: string, description : string},{}>
{
  render(){
    return (
        <div className="row">
            <div className="col-md-4">
                <img className="listimage" src={this.props.imgurl}></img>
            </div>
            <div className="col-md-4">
               <div><h3> {this.props.name}</h3> </div>
               <div> {this.props.description} </div>
            </div>
        </div>
    );
  }
};