import * as React from 'react'
import {UserList} from "Components/Elements/UserList"
import {ListView} from "Components/Elements/ListView"

export class CategoryPage extends React.Component <{},{}>{
    render(){
        return (
            <div className = "CategoryPage">
                <ListView elements={[
                    <UserList imgurl="profile_img.png" name="Bob" bio="CEO at some corporation" rating={4}/> 
                ]}/>
            </div>
        );
    }
}