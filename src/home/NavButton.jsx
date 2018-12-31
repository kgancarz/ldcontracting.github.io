import { Component } from 'reflux';
import React from 'react';

class NavButton extends Component {
	constructor(props) {
        super(props);

        this.setView = this.setView.bind(this); 

	}
	setView(){
        this.props.callback(this.props.button.view);
	}
	render(){
        return (
            <div className="navButton" onClick={this.setView}>
                {this.props.button.name}
            </div>
        )
    }
}


module.exports = NavButton;