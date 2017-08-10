import * as React from 'react'

export class About extends React.Component<{ idUser: number }, { adviserQuestions: Array<any> }>{

    render() {
        return (
            <div >
                <p>Through Advicy you can get the advice you need from verified proffesionals in different fields.</p>
                <p> It’s our mission to grow and cultivate the world’s largest digital imformation marketplace, a place where people can find and
                purchase the answers they need, and build any business they dream.</p>
                <p> As an employee, your work is inspired by the success of our users and the celebration of your own personal growth. Join us.</p>
            </div>
        );
    }
}