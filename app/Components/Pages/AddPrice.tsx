import * as React from "react"

export class AddPrice extends React.Component<{ userId: number }, { amount: string, details: string, order: string }>
{
    baseUrl: string = 'http://localhost:52619/api/price/';
    headers: Headers;

    constructor() {
        super();
        this.state = { amount: '', details: '', order: '' };
        this.handleNewPrice = this.handleNewPrice.bind(this);
        this.handleDetails = this.handleDetails.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
    }

    handleNewPrice(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ amount: event.currentTarget.value });
    }
    handleDetails(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ details: event.currentTarget.value });
    }
    handleOrder(event: React.FormEvent<HTMLInputElement>) {
        this.setState({ order: event.currentTarget.value });
    }
    handleSubmit(e: any) {
        e.preventDefault();
        this.postData();
    }

    postData() {
        var cats: any;
        var newPriceInstance = { details: this.state.details, amount: this.state.amount, order: this.state.order, userId: this.props.userId }
        var form2 = JSON.stringify(newPriceInstance);
        console.log(form2);
        cats = '';
        return fetch(this.baseUrl, { method: "POST", body: form2, headers: this.headers })
            .then((response) => response.json())
            .then(function (data) {
                cats = data;
                console.log(cats);
            })
            .catch(function (error) {
                console.log('request failed! Try again', error)
            })
    }

    render() {
        return (
            <div className='AddPrice'>
                <div className="col col-md-8">
                    <h2>
                        Add a new price to your category
                    </h2>
                    <form>
                        <div className="spacing">
                            <span >
                                Amount:
                            </span>
                            <span>
                                <input type="number" step="0.01" name="NewPrice" className="form-control" placeholder='Enter the price you want to add' onChange={this.handleNewPrice} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span >
                                Details:
                            </span>
                            <span>
                                <input type="text" name="Details" className="form-control" placeholder='Enter some details' onChange={this.handleDetails} />
                            </span>
                        </div>
                        <div className="spacing">
                            <span >
                                Order:
                            </span>
                            <span>
                                <input type="text" name="Order" className="form-control" placeholder='Enter the order' onChange={this.handleOrder} />
                            </span>
                        </div>
                        <div className="spacing">
                            <button className="btn blue-button" onClick={this.handleSubmit}>Add the new price!</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}