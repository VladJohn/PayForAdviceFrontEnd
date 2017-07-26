import * as React from 'react'

export class UserPrivateProfileBasePage extends React.Component <{},{name: string, email: string, bio: string, website: string}>{
    constructor() {
    super();
    this.state = {name:'a', email:'b', bio:'c', website:'d'};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeName(event : React.FormEvent<HTMLInputElement>){
            this.setState({name:event.currentTarget.value});
    }
    handleChangePassword(event : React.FormEvent<HTMLInputElement>){
            
    }
    handleChangeConfirmPassword(event : React.FormEvent<HTMLInputElement>){
            
    }        
    handleChangeEmail(event : React.FormEvent<HTMLInputElement>){
            this.setState({email:event.currentTarget.value});
    }
    handleChangeBio(event : React.FormEvent<HTMLInputElement>){
            this.setState({bio:event.currentTarget.value});
    }
    handleChangeWebsite(event : React.FormEvent<HTMLInputElement>){
            this.setState({website:event.currentTarget.value});
    }
    handleChangeAvatar(event : React.FormEvent<HTMLInputElement>){
            
    }

    handleSubmit(event : React.FormEvent<HTMLInputElement>){

    }
    
    render(){
        return (
            <div className = "UserPrivateProfileBasePage">
                <div className="col col-lg-4">
                </div>
                <div className="col col-lg-6">
                    <title> 
                        Profile 
                    </title>
                    <h1>
                        Profile
                    </h1>
                    <form>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Name         
                                </label>
                            </span>
                            <span>
                                    <input type="text" name="ChangeName" placeholder={this.state.name} onChange={this.handleChangeName}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Password
                                </label>
                            </span>
                            <span>
                                <input type="password" name="ChangePassword" placeholder='Type new password' onChange={this.handleChangePassword}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Confirm Password
                                </label>
                            </span>
                            <span>
                                <input type="password" name="ChangeConfirmPassword" placeholder='Confirm new password' onChange={this.handleChangeConfirmPassword}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Email
                                </label>
                            </span>
                            <span>
                                <input type="email" name="ChangeEmail" placeholder={this.state.email} onChange={this.handleChangeEmail}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Bio
                                </label>
                            </span>
                            <span>
                                <input type="text" name="ChangeBio" placeholder={this.state.bio} onChange={this.handleChangeBio}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    Website
                                </label>
                            </span>
                            <span>
                                <input type="text" name="ChangeWebsite" placeholder={this.state.website} onChange={this.handleChangeWebsite}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                <label className="label label-default">
                                    New Avatar Url
                                </label>
                            </span>
                            <span>
                                <input type="text" name="ChangeAvatarUrl" placeholder='Paste the url to your avatar picture' onChange={this.handleChangeAvatar}/>
                            </span>
                        </div>
                        <div>
                            <input type='submit' className="btn btn-primary" value="Update Information"/>
                        </div>
                    </form>
                </div>
                <div className="col col-lg-4">
                </div>
            </div>
        );
    }
}