import * as React from "react"
import { MainPage } from "Components/Pages/MainPage"
import { About } from "Components/Pages/About"
import { LoginPage } from "Components/Pages/LoginPage"
import { SignUpPage } from "Components/Pages/SignUpPage"
import { UserPrivateProfileAdviserPage } from "Components/Pages/UserPrivateProfileAdviserPage"
import { UserPrivateProfileBasePage } from "Components/Pages/UserPrivateProfileBasePage"
import { BaseUserQuestions } from "Components/Pages/BaseUserQuestions"
import { CategoryPage } from "Components/Pages/CategoryPage"
import { UserProfilePublicPage } from "Components/Pages/UserProfilePublicPage"
import { AnswerBasePage } from "Components/Pages/AnswerBasePage"
import { AdviceQuestionsPending } from "Components/Pages/AdviceQuestionsPending"
import { AdviceQuestions } from "Components/Pages/AdviceQuestions"
import { AnsweredQuestionsForAdvicer } from "Components/Pages/AnsweredQuestionsForAdvicer"
import { PendingQuestionsForAdvicer } from "Components/Pages/PendingQuestionsForAdvicer"
import { AddPrice } from "Components/Pages/AddPrice"
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';


export class AppViewer extends React.Component<{}, { tokenData: any }>
{
    baseUrl: string = 'http://localhost:52619/api/user/';
    headers: Headers;

    constructor() {
        super();
        this.state = { tokenData: "" };
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'TokenText': localStorage.getItem('token') });
    }

    componentDidMount() {
        if (localStorage.getItem("token") != '') {
            var cats = '';
            return fetch(this.baseUrl + "?userData=get", { method: "GET", headers: this.headers })
                .then((response) => response.json())
                .then(function (data) {
                    cats = data;
                    console.log(cats);
                })
                .then(() => { this.setState({ tokenData: cats }); })
                .catch(function (error) {
                    console.log('request failedddd', error)
                })
        }
    }


    render() {
        if (localStorage.getItem('token') === null) {
            localStorage.setItem('token', '');
        }
        return (
            <div className="spacing-bottomtop">
                <main>
                    <Router>
                        <div>
                            <Route exact path="/" render={() => (
                                (localStorage.getItem("token") == '') ? (
                                    <LoginPage />
                                ) : (
                                        <Redirect to="/main" />
                                    )
                            )} />
                            <Route path='/main' component={MainPage} />
                            <Route path='/register' component={SignUpPage} />
                            <Route path='/about' component={About} />
                            {console.log("render "+this.state.tokenData.Role)}
                            <Route path='/myQuestions' render={(props) => <BaseUserQuestions idUser={this.state.tokenData.Id} />} />
                            <Route path='/myProfile' render={(props) => 
                                    (this.state.tokenData.Role === 2) ? 
                                    (<UserPrivateProfileAdviserPage id={this.state.tokenData.Id} />)
                                      : ( <UserPrivateProfileBasePage id={this.state.tokenData.Id} /> )
                                    } />
                            <Route path='/category/:id' render={(props) => <CategoryPage id={props.match.params.id} />} />
                            <Route path='/user/:id' render={(props) => <UserProfilePublicPage id={props.match.params.id} idLoggedUser={this.state.tokenData.Id} />} />
                            <Route path='/question/:id' render={(props) => <AnswerBasePage idUser={props.match.params.id} />} />
                            <Route path='/myAnsweredQuestions' render={(props) => <AdviceQuestions idUser={this.state.tokenData.Id} />} />
                            <Route path='/myPendingQuestions' render={(props) => <AdviceQuestionsPending idUser={this.state.tokenData.Id} />} />
                            <Route path='/questionsAnswered/:id' render={(props) => <AnsweredQuestionsForAdvicer id={props.match.params.id} />} />
                            <Route path='/questionsPending/:id' render={(props) => <PendingQuestionsForAdvicer id={props.match.params.id} />} />
                            <Route path='/addPrice/:id' render={(props) => <AddPrice userId={props.match.params.id} />} />
                        </div>
                    </Router>
                </main>

            </div>
        );
    }
}