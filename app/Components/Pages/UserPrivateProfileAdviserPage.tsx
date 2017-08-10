import * as React from 'react'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

export class UserPrivateProfileAdviserPage extends React.Component<{ id: number }, { errorPut: string, success: boolean, name: string, email: string, bio: string, website: string, base: string, normal: string, premium: string, password: string, avatarUrl: string, rating: number }>{

    baseUrl: string = 'http://localhost:52619/api/user/';
    headers: Headers;
    constructor() {
        super();
        this.state = { errorPut: '', name: '', email: '', bio: '', website: '', base: '', normal: '', premium: '', password: '', avatarUrl: '', rating: 0, success: false };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeBio = this.handleChangeBio.bind(this);
        this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
        this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'TokenText': localStorage.getItem('token') });
        localStorage.getItem('Updated') === 'false'
    }

    componentDidMount() {
        var cats: any;
        cats = '';
        return fetch(this.baseUrl + "?userId=" + this.props.id, { method: "GET", headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
            })
            .then(() => {
                if (localStorage.getItem('Updated') === 'false') {
                    this.setState({ name: cats.Name, email: cats.Email, bio: cats.Bio, website: cats.Website, password: cats.Password, avatarUrl: cats.AvatarUrl, base: cats.base, normal: cats.normal, premium: cats.premium, rating: cats.Rating }),
                        localStorage.setItem("Updated", 'true')
                }
            })
            .catch(function (error) {
                console.log('request failed! Try again', error)
            })
    }

    putData() {
        var newProfile: any;
        var ceva = { id: this.props.id, name: this.state.name, password: this.state.password, email: this.state.email, bio: this.state.bio, website: this.state.website, avatarUrl: this.state.avatarUrl, base: this.state.base, normal: this.state.normal, premium: this.state.premium }
        var form2 = JSON.stringify(ceva);
        console.log(form2);
        newProfile = '';
        const that = this;
        return fetch(this.baseUrl, { method: "PUT", body: form2, headers: this.headers })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then(() => window.location.reload())
                } else {
                    return response.json()
                        .then(function (error) {
                            that.setState({ errorPut: error.Message });
                        });
                }
            })
            .then(function (data) {
                newProfile = data;
                console.log(newProfile);

            })
    }
    handleChangeName(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ name: event.currentTarget.value });
    }
    handleChangePassword(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ password: event.currentTarget.value })
    }
    handleChangeEmail(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ email: event.currentTarget.value });
    }
    handleChangeBio(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ bio: event.currentTarget.value });
    }
    handleChangeWebsite(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ website: event.currentTarget.value });
    }
    handleChangeAvatar(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ avatarUrl: event.currentTarget.value })
    }
    handleSubmit(event: any) {
        event.preventDefault();
        this.putData();
    }

    render() {
        let message = null;
        if (this.state.success == true) {
            message = <div className="spacing alert alert-success"> <strong>Success!</strong> Your information has been updated.</div>
        }
        else if (this.state.errorPut != '') {
            message = <div className="spacing alert alert-danger alert-container"> {this.state.errorPut}</div>
        }
        return (
            <div className="UserPrivateProfileAdviserPage">
                <h1>
                    My Profile
                </h1>
                <div className="col col-lg-6">
                    <form>
                        <div>

                            <span>
                                Name:
                            </span>
                            <span>
                                <input type="text" name="ChangeName" className="form-control" placeholder={this.state.name} onChange={this.handleChangeName} />
                            </span>
                        </div>
                        <div>
                            <span>
                                Password:
                            </span>
                            <span>
                                <input type="password" name="ChangePassword" className="form-control" placeholder='Type new password' onChange={this.handleChangePassword} />
                            </span>
                        </div>
                        <div>
                            <span>
                                Email:
                            </span>
                            <span>
                                <input type="email" name="ChangeEmail" className="form-control" placeholder={this.state.email} onChange={this.handleChangeEmail} />
                            </span>
                        </div>
                        <div>
                            <span>
                                Bio:
                            </span>
                            <span>
                                <input type="text" name="ChangeBio" className="form-control" placeholder={this.state.bio} onChange={this.handleChangeBio} />
                            </span>
                        </div>
                        <div>
                            <span>
                                Website:
                            </span>
                            <span>
                                <input type="text" name="ChangeWebsite" className="form-control" placeholder={this.state.website} onChange={this.handleChangeWebsite} />
                            </span>
                        </div>
                        <div>
                            <span>
                                New Avatar Url:
                            </span>
                            <span>
                                <input type="text" name="ChangeAvatarUrl" className="form-control" placeholder='Paste the url to your avatar picture' onChange={this.handleChangeAvatar} />
                            </span>
                        </div>
                        <div>
                            <Link key={this.props.id} to={"/addPrice/" + this.props.id} className="btn  blue-button spacing" >Add or update your prices</Link>
                            <br />
                            <button className="btn  blue-button" onClick={this.handleSubmit}>Update Information</button>
                        </div>
                    </form>
                    {message}
                </div>
                <div className="col col-lg-2"></div>
                <div className="col col-lg-3">
                    <img className="img-responsive" src={this.state.avatarUrl} />
                    <div className="text-centered">
                        My rating: {this.state.rating}
                    </div>
                </div>
            </div>
        );
    }
}