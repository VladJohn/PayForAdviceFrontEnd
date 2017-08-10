import * as React from "react"

export class AddPrice extends React.Component<{ userId: number }, {success1 : boolean, success2 : boolean, success3: boolean, errorPost1: string, errorPost2: string, errorPost3 : string, amount1: string, details1: string, order1: string, amount2: string, details2: string, order2: string, amount3: string, details3: string, order3: string, }>
{
    baseUrl: string = 'http://localhost:52619/api/price/';
    headers: Headers;

    constructor() {
        super();
        this.state = { success1 : false ,success2 : false,success3 : false, errorPost1 : '', errorPost2 : '', errorPost3 : '', amount1: '', details1: '', order1: 'Basic', amount2: '', details2: '', order2: 'Standard', amount3: '', details3: '', order3: 'Premium' };
        this.handleNewPrice1 = this.handleNewPrice1.bind(this);
        this.handleNewPrice2 = this.handleNewPrice2.bind(this);
        this.handleNewPrice3 = this.handleNewPrice3.bind(this);
        this.handleDetails1 = this.handleDetails1.bind(this);
        this.handleDetails2 = this.handleDetails2.bind(this);
        this.handleDetails3 = this.handleDetails3.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleSubmit3 = this.handleSubmit3.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    handleNewPrice1(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ amount1: event.currentTarget.value });
    }
    handleNewPrice2(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ amount2: event.currentTarget.value });
    }
    handleNewPrice3(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ amount3: event.currentTarget.value });
    }

    handleDetails1(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ details1: event.currentTarget.value });
    }
    handleDetails2(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ details2: event.currentTarget.value });
    }
    handleDetails3(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ details3: event.currentTarget.value });
    }
    handleSubmit1(e: any) {
        e.preventDefault();
        this.postData1();
    }
    handleSubmit2(e: any) {
        e.preventDefault();
        this.postData2();
    }
    handleSubmit3(e: any) {
        e.preventDefault();
        this.postData3();
    }
    postData1() {
        var newPrice: any;
        var newPriceInstance = { details: this.state.details1, amount: this.state.amount1, order: this.state.order1, userId: this.props.userId }
        var form2 = JSON.stringify(newPriceInstance);
        console.log(form2);;
        newPrice = '';
        let that = this;
        return fetch(this.baseUrl, { method: "PUT", body: form2, headers: this.headers })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then(() => this.setState({success1:true}))
                } else {
                    return response.json()
                        .then(function (error) {
                            that.setState({errorPost1: error.Message})
                            console.log("give the error!!!!" , error);
                        });
                }})
            .then(function (data) {

                newPrice = data;
                console.log(newPrice);
            })
    }
    postData2() {
        var newPrice: any;
        var newPriceInstance = { details: this.state.details2, amount: this.state.amount2, order: this.state.order2, userId: this.props.userId }
        var form2 = JSON.stringify(newPriceInstance);
        console.log(form2);
        newPrice = '';
        let that = this;
        return fetch(this.baseUrl, { method: "PUT", body: form2, headers: this.headers })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then(() => this.setState({success2:true}))
                } else {
                    return response.json()
                        .then(function (error) {
                            that.setState({errorPost2: error.Message})
                        });
                }})
            .then(function (data) {

                newPrice = data;
                console.log(newPrice);
            })
    }
    postData3() {
        var newPrice: any;
        var newPriceInstance = { details: this.state.details3, amount: this.state.amount3, order: this.state.order3, userId: this.props.userId }
        var form2 = JSON.stringify(newPriceInstance);
        console.log(form2);
        newPrice = '';
        const that = this;
        return fetch(this.baseUrl, { method: "PUT", body: form2, headers: this.headers })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                        .then(() => this.setState({success3:true}))
                } else {
                    return response.json()
                        .then(function (error) {
                            that.setState({errorPost3: error.Message})
                        });
                }})
            .then(function (data) {

                newPrice = data;
                console.log(newPrice);
            })
    }

    render() {
        let message1 = null;
        if (this.state.success1 == true) {
            message1 = <div className="spacing alert alert-success"> <strong>Success!</strong> Your price has been added.</div>
        }
        else if (this.state.errorPost1 != '') {
            message1 = <div className="spacing alert alert-danger alert-container"> {this.state.errorPost1}</div>
        }
        let message2 = null;
        if (this.state.success2 == true) {
            message2 = <div className="spacing alert alert-success"> <strong>Success!</strong> Your price has been added.</div>
        }
        else if (this.state.errorPost2 != '') {
            message2 = <div className="spacing alert alert-danger alert-container"> {this.state.errorPost2}</div>
        }
        let message3 = null;
        if (this.state.success3 == true) {
            message3 = <div className="spacing alert alert-success"> <strong>Success!</strong> Your price has been added.</div>
        }
        else if (this.state.errorPost3 != '') {
            message3 = <div className="spacing alert alert-danger alert-container"> {this.state.errorPost3}</div>
        }
        return (
            <div className='AddPrice'>
                <div className="col col-md-8">
                    <h2><b>
                        Add your prices
                    </b></h2>
                    <form>
                        <h3><i>Basic</i></h3>
                        <div className="spacing">

                            <span >
                                Amount:
                            </span>
                            <span>
                                <input type="number" step="0.01" name="NewPrice" className="form-control" placeholder='Enter the price you want to add' onChange={this.handleNewPrice1} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span >
                                Details:
                            </span>
                            <span>
                                <input type="text" name="Details" className="form-control" placeholder='Enter some details' onChange={this.handleDetails1} />
                            </span>
                        </div>
                        <div className="spacing">
                            <button className="btn blue-button" onClick={this.handleSubmit1}>Add the price!</button>
                        </div>
                        <h4>{message1}</h4>
                        <h3><i>Standard</i></h3>
                        <div className="spacing">

                            <span >
                                Amount:
                            </span>
                            <span>
                                <input type="number" step="0.01" name="NewPrice" className="form-control" placeholder='Enter the price you want to add' onChange={this.handleNewPrice2} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span >
                                Details:
                            </span>
                            <span>
                                <input type="text" name="Details" className="form-control" placeholder='Enter some details' onChange={this.handleDetails2} />
                            </span>
                        </div>
                        <div className="spacing">
                            <button className="btn blue-button" onClick={this.handleSubmit2}>Add the price!</button>
                        </div>
                        <h4>{message2}</h4>
                        <h3><i>Premium</i></h3>
                        <div className="spacing">

                            <span >
                                Amount:
                            </span>
                            <span>
                                <input type="number" step="0.01" name="NewPrice" className="form-control" placeholder='Enter the price you want to add' onChange={this.handleNewPrice3} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span >
                                Details:
                            </span>
                            <span>
                                <input type="text" name="Details" className="form-control" placeholder='Enter some details' onChange={this.handleDetails3} />
                            </span>
                        </div>
                        <div className="spacing">
                            <button className="btn blue-button" onClick={this.handleSubmit3}>Add the price!</button>
                        </div>
                        <h4>{message3}</h4>
                    </form>
                </div>
            </div>
        );
    }
}