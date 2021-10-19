
import {Store} from 'reflux';
import Actions from 'Actions';

class DataStore extends Store
{
	constructor()
	{
        super();
        this.state={
            view: "home"
        };
		this.listenToMany(Actions);
    }

    onLoadData(view){
        let data = {
            view: view,
            contactEN: "ldcontractingny",
            contactED: "gmail.com",
            navigatorConfig: {
                buttons: [
                    {name: "Home", view: "home"},
                    {name: "Products & Services", view: "products"},
                    {name: "Contact", view: "contact"}
                ]
            },
            phone:"518-470-7399",
            products:[
                {
                    title:"Premium Kiln-dried Firewood",
                    description:"Premium, kiln-dried hardwood. Available year-round, kiln-dried firewood burns clean and lights easy, maximizing the heating potential of the wood!",
                    info: "$400/cord $200/face cord, delivery within 15 miles of Grafton is free.",
                    show:true
                },
                {
                    title:"Log-Length Firewood",
                    description:"Truck load of log length firewood.",
                    info: "$650/load delivery within 15 miles is free.",
                    show:true
                },
                {
                    title:"Seasoned Firewood",
                    description:"Seasoned hardwood. Call for availability.",
                    info: "Call for Availability.",
                    show:true
                },
                {
                    title:"Green Firewood",
                    description:"Premium hardwood, season it yourself and save!",
                    info: "$220/cord available year round, delivery within 15 miles is free.",
                    show:true
                },
                {
                    title:"Timber Harvesting",
                    description:"Looking to make a few bucks from the renewable timber resources on your land? Call for more information!",
                    info: "Call for more information.",
                    show:true
                },
                {
                    title:"Lumber",
                    description:"",
                    info: "Call for more information.",
                    show:false
                }
            ]
        }
        Actions.loadData.completed(data);                
    }
	
	onLoadDataCompleted(data)
	{
        this.setState({data:data});
	}
	
	onLoadDataFailed(message)
	{
        console.error(message);
    }
    
    onSetView(view){
        Actions.setView.completed(view);
    }
    
    onSetViewCompleted(view){
        this.setState({view:view});
    }
    
    onSetViewFailed(view){
        this.setState({view:view});
    }
}

export default DataStore
