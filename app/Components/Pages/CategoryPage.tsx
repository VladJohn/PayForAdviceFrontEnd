import * as React from 'react'
import { UserList } from "Components/Elements/User"
import { ListView } from "Components/Elements/ListView"
import { Category } from "Components/Elements/Category"
import 'whatwg-fetch'

export class CategoryPage extends React.Component<{ id: number }, { usersByCategory: Array<any> }>{
    baseUrl: string = 'http://localhost:52619/api/user/?categoryId=' ;
    headers: Headers;    

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'TokenText':localStorage.getItem('token') });
        this.state = {
            usersByCategory: []
        };
        
    }
    componentWillReceiveProps()
    {
            
    }

    componentDidMount() {
        var user: any[];
        user = [];
        return fetch(this.baseUrl +this.props.id )
            .then((response) => response.json())
            .then(function (data) {
                user = data;
            })
            .then(() => (
                this.setState({ usersByCategory: user })
            ))
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    render() {
        return (
            <div className="MainPage">
                <div className="panel-body">
                    The users in this category are:
                </div>
                <ListView elements={
                    this.state.usersByCategory.map(function (object, i) {
                        return <UserList imgurl={"/"+object.AvatarUrl} id={object.Id} type="user" name={object.Name} bio={object.Bio} rating= {object.Rating} />;
                    }
                    )             
                } />
            </div>
        );
    }
}