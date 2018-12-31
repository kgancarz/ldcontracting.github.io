
import { Component } from 'reflux';
import React from 'react';
import DataStore from 'DataStore';
import Actions from 'Actions';


class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.store = DataStore;
	}
	componentWillMount(){
		
	}
	componentWillUnmount(){

	}
	render() {
		return <div className="home">>Home</div>
	}
}


module.exports = Home;



