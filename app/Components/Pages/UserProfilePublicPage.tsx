import * as React from 'react'
import { AskAdvice } from "Components/Elements/AskAdvice"

export class UserProfilePublicPage extends React.Component<{ id: number, idLoggedUser: number }, { user: any }>{

    baseUrl: string = 'http://localhost:52619/api/user/';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'TokenText': localStorage.getItem('token') });
        this.state = { user: "" };
    }

    componentDidMount() {
        var userData: any;
        return fetch(this.baseUrl + "?userId=" + this.props.id, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                userData = data;
                console.log('request ok', data)
            })
            .then(() => (
                this.setState({ user: userData })
            ))
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    render() {
        if (localStorage.getItem("token")) {
            return (
                <div>
                    <div className="row">
                        <div className="col col-md-3">
                            <img className="img-responsive" src={"" + this.state.user.AvatarUrl}></img>
                        </div>
                        <div className="col col-md-8 grey-text">
                            <p><b>Name: </b>{this.state.user.Name}</p>
                            <p><b>Site: </b><a href={this.state.user.Website}>{this.state.user.Website}</a></p>
                            <p><b>Rating: </b>{this.state.user.Rating}/5</p>
                        </div>
                    </div>
                    <div className="panel panel-default row spacing">
                        <div className="panel-body">
                            {this.state.user.Bio}
                        </div>
                    </div>
                    <AskAdvice idResponder={this.props.id} idAsker={this.props.idLoggedUser} />
                </div>

            );
        }
        else {
            return (
                <div> You are not logged in!</div>
            )
        }
    }
}