import { Component } from 'reflux';
import React from 'react';
import DataStore from 'DataStore';
import Actions from 'Actions';
import Contact from 'Contact';
import Home from 'Home';
import Products from 'Products';
import NavButton from 'NavButton';

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.store = DataStore;
	}
	componentDidMount() {
		let view = getUrlParam("view","home");
		Actions.loadData(view);
	}
	setView(val){
		Actions.setView(val);
	}
	getHeader(){
		let navButtons=[];
		if(this.state.data)
		{
			if(this.state.data.navigatorConfig){
				let length = this.state.data.navigatorConfig.buttons.length;
				for(let i = 0; i<length; i++){
					let button = this.state.data.navigatorConfig.buttons[i];
					navButtons.push(
						<NavButton key={'nav'+i} callback={this.setView} button={button} />
					)
				}
			}
		}
		let phone="";
		if(this.state.data){
			phone=this.state.data.phone;
		}
		
		return (
			<div id="pageHeader">
				<div id="logo" className="companyLogo">
				<img id="logoimg" src="resource/img/ldcontractingblack.png"/>
				
				<div className="sloganContainer">
				<div className="sloganText slogan">Premium Firewood Services</div><div className="divider"/><div className="sloganText slogan">Rensselaer County, New York</div>
				</div>
				<div className="sloganText">{phone}</div>
				</div>
				<div id="navigator" className="navBar">
					{
						navButtons
					}
				</div>
			</div>
		)
	}
	getFooter(){
		return <div className="footer"><div id="footerImage" style={{backgroundRepeat: "no-repeat",backgroundImage: 'url(resource/img/fire.gif)'}}/>
			<a href="https://facebook.com/ldkiln"><img className="fblink" src='https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=40&h=40'/></a>
		</div>
	}
	getContent(){
		if(this.state.view == "contact"){
			return <Contact/>;
		}
		else if (this.state.view == "products"){
			return <Products/>;
		}
		else if (this.state.view == "home"){
			return <Home/>;
		}
		else{
			return <div>{this.state.view}</div>
		}
		return <div/>
	}
	render() {			
		return <center><div>
			{this.getHeader()}
			{this.getContent()}
			{this.getFooter()}
			</div></center>
	}
}


module.exports = Dashboard;
