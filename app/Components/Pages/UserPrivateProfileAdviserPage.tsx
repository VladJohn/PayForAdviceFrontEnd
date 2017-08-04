import * as React from 'react'

export class UserPrivateProfileAdviserPage extends React.Component <{id:number},{name: string, email: string, bio: string, website: string, base:string, normal:string, premium:string, password:string, avatarUrl :string, rating:number}>{
    
    baseUrl: string = 'http://localhost:52619/api/user/';
    headers: Headers;
    constructor() {
    super();
    this.state = {name:'', email:'', bio:'', website:'', base:'', normal:'', premium:'', password:'', avatarUrl:'', rating:0};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    this.handleChangeBase = this.handleChangeBase.bind(this);
    this.handleChangeNormal = this.handleChangeNormal.bind(this);
    this.handleChangePremium = this.handleChangePremium.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'TokenText': localStorage.getItem('token') });
    localStorage.setItem("Updated",'false');
    }

    componentDidMount()
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
                        this.setState({ name:cats.Name, email:cats.Email, bio:cats.Bio, website:cats.Website , password:cats.Password, avatarUrl:cats.AvatarUrl, base:cats.base, normal:cats.normal, premium:cats.premium, rating:cats.Rating}),
                        localStorage.setItem("Updated", 'true')
                    }})
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    putData()
    {
        var cats: any;
        var ceva = {id:this.props.id, name:this.state.name, password:this.state.password, email:this.state.email, bio:this.state.bio, website:this.state.website, avatarUrl:this.state.avatarUrl, base: this.state.base, normal:this.state.normal, premium:this.state.premium}
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
            this.setState({password:event.currentTarget.value})
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
            this.setState({avatarUrl:event.currentTarget.value})
    }
    handleChangeBase(event : React.FormEvent<HTMLInputElement>){
            this.setState({base:event.currentTarget.value});
    }
    handleChangeNormal(event : React.FormEvent<HTMLInputElement>){
            this.setState({normal:event.currentTarget.value});
    }
     handleChangePremium(event : React.FormEvent<HTMLInputElement>){
            this.setState({premium:event.currentTarget.value});
    }

    handleSubmit(event : any){
        event.preventDefault();
        this.putData();
    }

    render(){
        return (
            <div className = "UserPrivateProfileAdviserPage">
                <div className="col col-lg-6">
                    <h1>
                        Profile
                    </h1>
                    <form>
                        <div>
                            <div>
                                <label>My rating: {this.state.rating}</label>
                            </div>
                            <span>
                                    Name:      
                            </span>
                            <span>
                                    <input type="text" name="ChangeName" className="form-control" placeholder={this.state.name} onChange={this.handleChangeName}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Password:
                            </span>
                            <span>
                                <input type="password" name="ChangePassword"className="form-control" placeholder='Type new password' onChange={this.handleChangePassword}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Confirm Password:
                            </span>
                            <span>
                                <input type="password" name="ChangeConfirmPassword"className="form-control" placeholder='Confirm new password' onChange={this.handleChangeConfirmPassword}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Email:
                            </span>
                            <span>
                                <input type="email" name="ChangeEmail"className="form-control" placeholder={this.state.email} onChange={this.handleChangeEmail}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Bio:
                            </span>
                            <span>
                                <input type="text" name="ChangeBio"className="form-control" placeholder={this.state.bio} onChange={this.handleChangeBio}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Website:
                            </span>
                            <span>
                                <input type="text" name="ChangeWebsite"className="form-control" placeholder={this.state.website} onChange={this.handleChangeWebsite}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Base Price:
                            </span>
                            <span>
                                <input type="text" name="ChangeBasePrice"className="form-control" placeholder={this.state.base} onChange={this.handleChangeBase}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Normal Price:
                            </span>
                            <span>
                                <input type="text" name="ChangeNormalPrice"className="form-control" placeholder={this.state.normal}  onChange={this.handleChangeNormal}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    Premium Price:
                            </span>
                            <span>
                                <input type="text" name="ChangePremiumPrice"className="form-control" placeholder={this.state.premium}  onChange={this.handleChangePremium}/>
                            </span>
                        </div>
                        <div>
                            <span>
                                    New Avatar Url:
                            </span>
                            <span>
                                <input type="text" name="ChangeAvatarUrl"className="form-control" placeholder='Paste the url to your avatar picture' onChange={this.handleChangeAvatar}/>
                            </span>
                        </div>
                        <div>
                            <button className="btn blue-button" onClick={this.handleSubmit}>Update Information</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}