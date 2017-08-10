import * as React from "react"

export class UserList extends React.Component<{ type: string, id: number, imgurl: string, name: string, bio: string, rating: number }, {}>
{
    render() {
        let bio = null;
        if ( this.props.bio != null)
            {
                   bio =  <div> {this.props.bio.substring(0,200)}... </div>; 
            }
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="user-image">
                        <img className=" img-responsive img-cropped" src={this.props.imgurl}></img>
                    </div>
                </div>
                <div className="col-md-5">
                    <div><h3> {this.props.name}</h3> </div>
                    {bio}
                    <div className="spacing"> <strong>Rating:</strong> {this.props.rating}/5 </div>
                </div>
            </div>
        );
    }
};