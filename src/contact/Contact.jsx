
import { Component } from 'reflux';
import React from 'react';
import DataStore from 'DataStore';
import Actions from 'Actions';


class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.store = DataStore;
	}
	render() {
		let em = this.state.contactEN;
		em+="@";
		em += this.state.contactED;
		let url = 'https://formspree.io/'+em;
		if(em.length==1){
			return (<div/>);
		}
		let phone="518-470-7399";
		if(this.state.data){
			phone=this.state.data.phone;
		}
		let form = (
			<form action={url} className="contactForm" method="POST">
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name"/>
				<label htmlFor="contact">Contact Info:</label>
				<input type="text" id="contact" name="contact"/>
				<label htmlFor="message">Message:</label>
				<input type="text" id="message" name="message"/>
				<input type="submit" value="Send"/>
			</form>
		)
	
		return (
			<div className="home contact">
				<div className="contactInfo">Call Lenny at <u>{phone}</u> for the quickest response. You may also use the contact form below to send an email.</div>
				{form}
			</div>
		);
	}
}


module.exports = Contact;



