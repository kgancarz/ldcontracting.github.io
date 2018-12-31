
import { render } from 'react-dom';
import React from 'react';
import Dashboard from 'Dashboard';


function launchReactInterface(){
	render(
		<Dashboard/>,
		document.getElementById('_base_react_container')
	);
}

launchReactInterface();
