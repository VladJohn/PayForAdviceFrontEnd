import * as React from "react"
import {Category} from "Components/Elements/Category"
import {ListView} from "Components/Elements/ListView"
import {UserList} from "Components/Elements/UserList"

export class AppViewer extends React.Component <{},{}>
{
    render(){
        return (
            <div className = "AppViewer">
                <ListView elements={[<Category imgurl="interiordesign.jpg" name="Interior design" description="Get help with designing your home"/> ,
                <Category imgurl="law.jpg" name="Law" description="Get help from a lawyer"/>,
                <UserList imgurl="profile_img.png" name="Bob" bio="CEO at some corporation" rating={4}/> ]}/>
            </div>
        );
    }
}