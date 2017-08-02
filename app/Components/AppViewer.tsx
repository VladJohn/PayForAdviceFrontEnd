import * as React from "react"
import {MainPage} from "Components/Pages/MainPage"
import {LoginPage} from "Components/Pages/LoginPage"
import {SignUpPage} from "Components/Pages/SignUpPage"
import {UserPrivateProfileBasePage} from "Components/Pages/UserPrivateProfileBasePage"
import {BaseUserQuestions} from "Components/Pages/BaseUserQuestions"
import {CategoryPage} from "Components/Pages/CategoryPage"
import {UserProfilePublicPage} from "Components/Pages/UserProfilePublicPage"
import {AnswerBasePage} from "Components/Pages/AnswerBasePage"
import {AdviceQuestions} from "Components/Pages/AdviceQuestions"
import {AnsweredQuestionsForAdvicer} from "Components/Pages/AnsweredQuestionsForAdvicer"

import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';


export class AppViewer extends React.Component <{},{}>
{



    render(){
        if(localStorage.getItem('token')===null)
            {
                localStorage.setItem('token', '');
            }
        return (
            <div className = "spacing-bottomtop">
               <main>
                    <Router>
                    <div>
                        <Route exact path="/" render={() => (
                            (localStorage.getItem("token") == '') ? (
                                <LoginPage/>
                            ) : (
                                <Redirect to="/main"/>
                            )
                            )}/>
                        <Route path='/main' component={MainPage}/>
                        <Route path='/register' component={SignUpPage}/>
                        <Route path='/myQuestions'  render={(props)=><BaseUserQuestions idUser={1}/>}/>
                        <Route path='/myProfile' component={UserPrivateProfileBasePage}/>
                        <Route path='/category/:id' render={(props)=><CategoryPage id={props.match.params.id}/>}/>
                        <Route path='/user/:id' render={(props)=><UserProfilePublicPage id={props.match.params.id}/>}/>
                        <Route path='/question/:id' render={(props)=><AnswerBasePage idUser={props.match.params.id}/>}/>
                        <Route path='/myAnsweredQuestions' render={(props)=><AdviceQuestions idUser={1}/>}/>
                        <Route path='/questionsAnswered/:id' render={(props)=><AnsweredQuestionsForAdvicer id={props.match.params.id}/>}/>
                     </div>
                    </Router>
                </main>
                
            </div>
        );
    }
}