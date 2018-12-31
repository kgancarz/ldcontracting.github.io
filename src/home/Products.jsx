
import { Component } from 'reflux';
import React from 'react';
import DataStore from 'DataStore';
import Actions from 'Actions';
import ProductInfo from 'ProductInfo';


class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.store = DataStore;
	}
	render() {
		let blurb="We offer premium firewood cut, split, and delivered year-round in Rensselaer County, New York. Pricing may vary."
		let products=[];
		if(this.state.data!=null && this.state.data.products != null){
			let length = this.state.data.products.length;
			for (let i = 0 ; i< length;i++){
				let product = <ProductInfo key={i} product={this.state.data.products[i]}/>
				if(this.state.data.products[i].show){
					products.push(product);
				}
			}
		}
		return <div className="home products">
			<div className="productBlurb">{blurb}</div>
			{products}
		</div>
	}
}


module.exports = Products;



