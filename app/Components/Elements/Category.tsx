import * as React from "react"

export class Category extends React.Component<{imgurl: string, name: string, description : string},{}>
{
  render(){
    return (
        <div className="row">
            <div className="col-md-4">
                <img className="categoryimage" src={this.props.imgurl}></img>
            </div>
            <div className="col-md-5">
               <div><h2> {this.props.name}</h2> </div>
               <div> {this.props.description} </div>
            </div>
        </div>
    );
  }
};