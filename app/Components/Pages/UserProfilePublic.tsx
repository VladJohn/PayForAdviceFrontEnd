import * as React from 'react'
import {AskAdvice} from "Components/Elements/AskAdvice"

export class UserProfilePublic extends React.Component <{imgurl: string, name :string, username: string, website:string, bio:string, rating : number},{}>{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col col-md-3">
                        <img className="img-responsive" src={this.props.imgurl}></img>
                    </div> 
                    <div className="col col-md-8">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.username}</p>
                        <a href = {this.props.website} >{this.props.website}</a>
                        <p>Rating: {this.props.rating}/5</p>
                    </div> 
                </div>
                <div className="panel panel-default row spacing">
                            <div className="panel-body">
                                {this.props.bio}
                            </div>
                </div>
                <AskAdvice/>

            </div>

        );
    }
}