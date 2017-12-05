require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/clock.css');

import React from 'react';
import Moment from 'moment';


class TickToc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      times: Moment(this.props.systime).format("hh:mm:ss a")
    };
  }
  render(){
    setTimeout(()=>{
      this.setState({
        times: Moment(this.state.time).format("hh:mm:ss a")
      })
    }, 1000)

    return(
      <div>
        <div>
          {this.state.times}
        </div>
      </div>
      );
  }
} 
TickToc.defaultProps = {};
export default TickToc;

