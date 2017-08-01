import * as React from "react"

export class UserList extends React.Component<{type: string, id:number, imgurl: string, name: string, bio : string, rating : number},{}>
{
  render(){
    return (
        <div className="row">
            <div className="col-md-3">
                <img className="img-circle img-responsive" src={this.props.imgurl}></img>
            </div>
            <div className="col-md-5">
               <div><h3> {this.props.name}</h3> </div>
               <div> {this.props.bio} </div>
               <div> Rating: {this.props.rating}/5 </div>
            </div>
        </div>
    );
  }
};