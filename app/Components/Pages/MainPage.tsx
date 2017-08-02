import * as React from 'react'
import { Category } from "Components/Elements/Category"
import { ListView } from "Components/Elements/ListView"
import 'whatwg-fetch'

export class MainPage extends React.Component<{}, { categories: Array<any> }>{

    baseUrl: string = 'http://localhost:52619/api/category/';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = { categories: [] };
    }

    componentDidMount() {
        var cats: any[];
        cats = [];
        return fetch(this.baseUrl)
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
            })
            .then(() => (
                this.setState({ categories: cats })
            ))
            .catch(function (error) {
                console.log('request failedddd', error)
            })
    }

    render() {
        return (
            <div className="MainPage">
                <div className="panel-body">

                    Browse our categories and find the advice that suits you from verified professionals.

                </div>
                <ListView elements={
                    this.state.categories.map(function (object, i) {
                    return <Category type="category" imgurl={object.ImageUrl} name={object.Name} description={object.Description} id={object.Id} iconurl={object.IconUrl} />;
                })} />

            </div>
        );
    }
}