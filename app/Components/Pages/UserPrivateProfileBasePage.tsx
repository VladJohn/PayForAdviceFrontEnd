import * as React from 'react'

export class UserPrivateProfileBasePage extends React.Component <{id:number},{name: string, email: string, bio: string, website: string, password:string, avatarUrl :string}>{
    
    baseUrl: string = 'http://localhost:52619/api/user/';
    headers: Headers;
    constructor() {
    super();
    this.state = {name:'', email:'', bio:'', website:'', password:'', avatarUrl:''};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'TokenText': localStorage.getItem('token')});
    localStorage.setItem("Updated",'false');
    }

    componentDidUpdate()
    {
        var cats: any;
        cats = '';
        return fetch(this.baseUrl+"?id="+this.props.id)
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
            })
            .then(() => 
                    {
                if(localStorage.getItem('Updated') === 'false')
                    {
                        this.setState({ name:cats.Name, email:cats.Email, bio:cats.Bio, website:cats.Website , password:cats.Password, avatarUrl:cats.AvatarUrl});
                        localStorage.setItem("Updated", 'true')
                    }
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    putData()
    {
        var cats: any;
        var ceva = {id:this.props.id, name:this.state.name, password:this.state.password, email:this.state.email, bio:this.state.bio, website:this.state.website, avatarUrl:this.state.avatarUrl}
        var form2 = JSON.stringify(ceva);
        console.log(form2);
        cats = '';
        return fetch(this.baseUrl, {method : "PUT", body: form2, headers:this.headers})
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }
    
    handleChangeName(event : React.FormEvent<HTMLInputElement>){
            this.setState({name:event.currentTarget.value});
    }
    handleChangePassword(event : React.FormEvent<HTMLInputElement>){
            this.setState({password: event.currentTarget.value});
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
            this.setState({avatarUrl:event.currentTarget.value});
    }

    handleSubmit(event : any){
        event.preventDefault();
        this.putData();
        window.location.reload();
    }
    
    render(){
        return (
            <div className = "UserPrivateProfileBasePage">
                <div className="col col-lg-6">
                    <h1>
                        Profile
                    </h1>
                    <form>
                        <div>
                            <span>
                                    Name:       
                            </span>
                            <span>
                                    <input type="text" name="ChangeName" className="form-control"  placeholder={this.state.name} onChange={this.handleChangeName}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Password:
                            </span>
                            <span>
                                <input type="password" name="ChangePassword" className="form-control"  placeholder='Type new password' onChange={this.handleChangePassword}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Confirm Password:
                            </span>
                            <span>
                                <input type="password" name="ChangeConfirmPassword" className="form-control"  placeholder='Confirm new password' onChange={this.handleChangeConfirmPassword}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Email:
                            </span>
                            <span>
                                <input type="email" name="ChangeEmail" className="form-control"  placeholder={this.state.email} onChange={this.handleChangeEmail}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Bio:
                            </span>
                            <span>
                                <input type="text" name="ChangeBio" className="form-control"  placeholder={this.state.bio} onChange={this.handleChangeBio}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Website:

                            </span>
                            <span>
                                <input type="text" name="ChangeWebsite" className="form-control"  placeholder={this.state.website} onChange={this.handleChangeWebsite}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    New Avatar Url:
                            </span>
                            <span>
                                <input type="text" name="ChangeAvatarUrl" className="form-control"  placeholder='Paste the url to your avatar picture' onChange={this.handleChangeAvatar}/>
                            </span>
                        </div>
                        <div>
                            <button  className="btn blue-button" onClick={this.handleSubmit}>Update Information</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}