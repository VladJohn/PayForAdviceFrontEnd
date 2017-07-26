import * as React from 'react'
import {UserList} from "Components/Elements/User"
import {ListView} from "Components/Elements/ListView"

export class CategoryPage extends React.Component <{},{}>{
    render(){
        return (
            <div className = "CategoryPage">
                <ListView elements={[
                    <UserList imgurl="profile_img.png" name="Bob Williams" bio="CEO at some corporation" rating={4}/> ,
                    <UserList imgurl="profile_img.png" name="John Artwood" bio="Lawyer and university professor. I love reading and fishing." rating={4}/> 
                ]}/>
            </div>
        );
    }
}