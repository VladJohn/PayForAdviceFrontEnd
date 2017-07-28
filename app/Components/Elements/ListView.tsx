import * as React from "react"

export class ListView extends React.Component<{elements :Array<any>},{}>
{
  constructor() {
    super();
    this.props = { elements: []};
  }


  render(){
    return (
        <div className="list-group">
        {this.props.elements.map(function(listValue){
            return <a key={listValue.Id} href="/"className="list-group-item">{listValue}</a>;
          })}
        </div>
    );
  }
};