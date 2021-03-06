import * as React from 'react'
import { Category } from "Components/Elements/Category"
import { ListView } from "Components/Elements/ListView"
import 'whatwg-fetch'

export class MainPage extends React.Component<{ token: string }, { categories: Array<any>, loaded: boolean, token: string }>{

    baseUrl: string = 'http://localhost:52619/api/category/';
    baseUrl2: string = 'http://localhost:52619/api/user/?facebook="true';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = { categories: [], loaded: false, token: '' };
    }

    refresh() {
        window.location.reload();
    }

    componentDidMount() {
        var cats: any[];
        cats = [];
        return fetch(this.baseUrl)
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
            })
            .then(() => {
                this.setState({ categories: cats, loaded: true });
                if (localStorage.getItem('token') === '') {
                    localStorage.setItem("token", this.props.token)
                    localStorage.setItem("fbLogged", "true")
                    this.refresh()
                }
                else
                { }
            })
            .catch(function (error) {
                window.location.replace("/oups")
            })
    }

    render() {
        let loaderImg = null;
        if (this.state.loaded == false) {
            loaderImg = <img className="loader spacing" src="/loader.gif" />
        }
        if (localStorage.getItem("token")) {
            return (
                <div className="MainPage">
                    <div className="panel-body">

                        Browse our categories and find the advice that suits you from verified professionals.

                </div>
                    <div className="col col-md-6"></div>
                    {loaderImg}
                    <ListView elements={
                        this.state.categories.map(function (object, i) {
                            return <Category type="category" imgurl={object.ImageUrl} name={object.Name} description={object.Description} id={object.Id} iconurl={object.IconUrl} />;
                        })} />

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