import * as React from 'react'
import {Category} from "Components/Elements/Category"
import {ListView} from "Components/Elements/ListView"
import 'whatwg-fetch'
import {CategoryService} from "Services/CategoryService"

export class MainPage extends React.Component <{},{categories:Array<Category> }>{
    
    baseUrl: string = 'http://localhost:52619/api/category/';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state ={categories:[]};
    }

    componentDidMount() {
    return fetch(this.baseUrl)
      .then((response) => response.json())
      .then(function(data) {
        //  data.map(function(item : any){
             // categories.push(item)} )
          console.log('request succeeded with JSON response', data[0].Name)
      }).catch(function(error) {
      console.log('request failedddd', error)
     })

    }

    render(){
        return (
            <div className = "MainPage">
                  <div className="panel-body">
               
                    Browse our categories and find the advice that suits you from verified professionals.
                
                </div>
                <ListView elements={[
                    <Category imgurl="interiordesign.jpg" name="Interior design" description="Get help with designing your home"/> ,
                    <Category imgurl="law.jpg" name="Law" description="Get help from a lawyer"/>
                ]}/>
                
            </div>
        );
    }
}