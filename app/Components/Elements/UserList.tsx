import * as React from "react"

export class UserList extends React.Component<{imgurl: string, name: string, bio : string, rating : number},{}>
{
  render(){
    return (
        <div className="row">
            <div className="col-md-4">
                <img className="img-circle listimage" src={this.props.imgurl}></img>
            </div>
            <div className="col-md-5">
               <div><h2> {this.props.name}</h2> </div>
               <div> {this.props.bio} </div>
               <div> Rating: {this.props.rating}/5 </div>
            </div>
        </div>
    );
  }
};