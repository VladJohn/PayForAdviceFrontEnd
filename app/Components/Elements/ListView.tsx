import * as React from "react"
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class ListView extends React.Component<{elements :Array<any>},{}>
{
  constructor() {
    super();
    this.props = { elements: []};
  }


    refresh()
    {
            window.location.reload();
    }

  render(){
    return (
        <div className="list-group">
          
        {this.props.elements.map(function(listValue){
            
            return <Link to={`/`+listValue.props.type+`/${listValue.props.id}`} className="list-group-item" >{listValue}</Link>;
          })}
        </div>
    );
  }
};