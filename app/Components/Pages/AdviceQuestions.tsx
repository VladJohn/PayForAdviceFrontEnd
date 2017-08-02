import * as React from 'react'
import { UserList } from "Components/Elements/User"
import { ListView } from "Components/Elements/ListView"
import { Category } from "Components/Elements/Category"
import { Question } from "Components/Elements/Question"
import 'whatwg-fetch'

export class AdviceQuestions extends React.Component<{ idUser: number }, { adviserQuestions: Array<any> }>{
    baseUrl: string = 'http://localhost:52619/api/question/?idAdvicer=';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = {
            adviserQuestions: []
        };
    }

    componentDidMount() {
        var user: any[];
        user = [];
        return fetch(this.baseUrl + this.props.idUser)
            .then((response) => response.json())
            .then(function (data) {
                user = data;
            })
            .then(() => (
                this.setState({ adviserQuestions: user })
            ))
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    render() {
        return (
            <div className="MainPage">
                <div className="panel-body">
                    
                </div>
                <ListView elements={
                    this.state.adviserQuestions.map(function (object, i) {
                        return <Question type={"questionsAnswered"}id={object.Id} question={object.QuestionText} status={object.Status} date={object.Date.substring(0,10)}/>;
                    }
                    )
                } />
            </div>
        );
    }
}