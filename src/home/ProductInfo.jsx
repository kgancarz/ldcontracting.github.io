
import { Component } from 'reflux';
import React from 'react';
import DataStore from 'DataStore';
import Actions from 'Actions';


class ProductInfo extends Component {
	constructor(props) {
		super(props);
	}
	jumpToContact(){
		Actions.setView("contact");
	}
	render() {
		return <div className="productInfo">
			<div className="productName">
			{this.props.product.title}
			</div>
			<div className="productPrice" onClick={this.jumpToContact}>
			{this.props.product.info}
			</div>
			<div className="productDetails">
			{this.props.product.description}
			</div>
		</div>
	}
}


module.exports = ProductInfo;



