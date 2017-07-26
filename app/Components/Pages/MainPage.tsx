import * as React from 'react'
import {Category} from "Components/Elements/Category"
import {ListView} from "Components/Elements/ListView"

export class MainPage extends React.Component <{},{}>{
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