import * as React from 'react'

export class About extends React.Component<{ idUser: number }, { adviserQuestions: Array<any> }>{

    render() {
        return (
            <div >
                Through Advicy you can get the advice you need from verified proffesionals in different fields.
            </div>
        );
    }
}