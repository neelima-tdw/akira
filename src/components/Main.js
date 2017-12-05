require('normalize.css/normalize.css');
require('styles/App.css');

import TickToc from './TickToc';
import React from 'react';
import Moment from 'moment';

class AppComponent extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		data: []
	};
}

componentDidMount(){

	return fetch('https://app.akira.md/api/system_status')
	.then ((response) => response.json())
	.then ((responseJson) => {
		this.setState({data: responseJson})
		var a = this.state.data;
		console.log(a);
	});
}
render() {
	let a = this.state.data;
	var text,text2,text3;
	if(a.is_open_for_business == true) {
		text = "we're open!";
		text2 = Moment(a.open_hours_today.open_at).format("hh:mm a");
		text3 = Moment(a.open_hours_today.close_at).format("hh:mm a");
		return (
			<div className = "screen"> {text}
				<div className = "hours"> Timing: {text2} To {text3}
					<TickToc systime = {a.system_time}/>
				</div>
			</div>
			);
		}	
		else{
			text = "sorry,we're closed!";
			return (
			<div className = "screen"> {text}
			<TickToc systime = {a.system_time}/>
			</div>
			);
		}
		

	}
}

AppComponent.defaultProps = {};
export default AppComponent;
