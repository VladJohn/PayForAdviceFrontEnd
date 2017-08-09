import * as React from "react"
import { Header } from "Components/Header"
import { AppViewer } from "Components/AppViewer"
import { Footer } from "Components/Footer"
import { Question } from "Components/Elements/Question"
import { ListView } from "Components/Elements/ListView"

export class BaseUserQuestions extends React.Component<{idUser: number}, {adviserQuestions: Array<any>, sorter:number}>
{
    baseUrl: string = 'http://localhost:52619/api/question/?userIdForSorting=';
    headers: Headers;

    constructor() {
        super();
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        this.state = {
            adviserQuestions: [], sorter:0
        };
        this.changeStatus = this.changeStatus.bind(this);
        this.changeDate = this.changeDate.bind(this);
       localStorage.setItem("Updated",'false');
    }

    changeStatus()
    {
        this.setState({sorter:2})
        localStorage.setItem("Updated",'false');
    }

    changeDate()
    {
        this.setState({sorter:1})
        localStorage.setItem("Updated",'false');
    }

    componentDidUpdate() {
        var user: any[];
        user = [];
        console.log(this.props.idUser)
        return fetch(this.baseUrl + this.props.idUser + "&sorter=" + this.state.sorter)
            .then((response) => response.json())
            .then(function (data) {
                user = data;
            })
            .then(() => {
                if(localStorage.getItem('Updated') === 'false')
                    {
                        this.setState({ adviserQuestions: user })
                        localStorage.setItem("Updated", 'true')
                        console.log(user)
                    }
            })
            .catch(function (error) {
                console.log('request failed', error)
            })
    }

    render() {
        return (
            <div className="row">
                <div className = "col-md-8" >
                    <ListView elements={
                    this.state.adviserQuestions.map(function (object, i) {
                        return <Question type={"question"}id={object.Id} question={object.QuestionText} status={object.Status} date={object.Date.substring(0,10)} ordine={object.Order}/>;
                    }
                    )
                } />
                </div>
                <div className = "col-md-4">
                    <ul className="nav nav-pills nav-stacked">
                    <li role="presentation"><a href="#" onClick={this.changeStatus}>By status</a></li>
                    <li role="presentation"><a href="#" onClick={this.changeDate}>By date</a></li>
                </ul>
                </div>
            </div>
        );
    }
}