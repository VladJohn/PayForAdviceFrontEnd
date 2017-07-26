import * as React from "react"

export class Price extends React.Component<{price : number, details:string, order:string},{}>
{
  render(){
    return (
        <div>
        <h4 className="text-primary">${this.props.price}</h4>
        <p className="text-bold">{this.props.order}</p>
        <p>{this.props.details}</p>
        </div>
    );
  }
};