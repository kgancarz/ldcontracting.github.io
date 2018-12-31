
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
	productsPage(){
		Actions.setView("products");
	}
	contactPage(){
		Actions.setView("contact");
	}
	render() {
		return <div className="home">
		<div><img className="homeImage" src="resource/img/truck.png"/></div>
		<div className="homeBlurb">Welcome to L.D. Contracting of Grafton, NY. We provide premium firewood services in Rensselaer County, NY. Head on over to our <a className="internalLink" onClick={this.productsPage}>Products & Services</a> page for more information about our offerings, including pricing. If you would like to talk to somebody, check out our <a className="internalLink" onClick={this.contactPage}>Contact</a> page for information on how to reach us.</div></div>
	}
}


module.exports = Home;



