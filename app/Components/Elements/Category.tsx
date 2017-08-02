import * as React from "react"

export class Category extends React.Component<{type : string, imgurl: string, name: string, description : string, id : number, iconurl: string},{}>
{

  render(){
    return (
        <div className="row">
            <div className="col-md-4">
                <img className="listimage img-responsive" src={this.props.imgurl}></img>
            </div>
            <div className="col-md-7">
               <div className="category-title"><h3> {this.props.name}</h3> </div>
               <div> {this.props.description} </div>
            </div>
            <div className="col-md-1">
               <img className="listimage img-responsive" src={this.props.iconurl}></img>
            </div>
        </div>
    );
  }
};