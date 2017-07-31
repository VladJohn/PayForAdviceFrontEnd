import * as React from "react"
import {MainPage} from "Components/Pages/MainPage"
import {UserPrivateProfileBasePage} from "Components/Pages/UserPrivateProfileBasePage"
import {BaseUserQuestions} from "Components/Pages/BaseUserQuestions"
import {CategoryPage} from "Components/Pages/CategoryPage"
import {UserProfilePublicPage} from "Components/Pages/UserProfilePublicPage"
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';


export class AppViewer extends React.Component 
{

    render(){
        return (
            <div className = "spacing-bottomtop">
               <main>
                    <Router>
                    <div>
                        <Route exact path='/' component={MainPage}/>
                        <Route path='/myQuestions' component={BaseUserQuestions}/>
                        
                        <Route path='/myProfile' component={UserPrivateProfileBasePage}/>
                        <Route path='/category/:id' render={(props)=><CategoryPage id={props.match.params.id}/>}/>
                        <Route path='/user/:id' render={(props)=><UserProfilePublicPage id={props.match.params.id}/>}/>
                     </div>
                    </Router>
                </main>
                
            </div>
        );
    }
}