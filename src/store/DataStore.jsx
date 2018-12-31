
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
                    title:"Seasoned Firewood",
                    description:"Premium, kiln-dried hardwood. Available year-round, kiln-dried firewood burns clean and lights easy, maximizing the heating potential of the wood!",
                    info: "$350 cord, $225 face cord. Delivery included",
                    show:true
                },
                {
                    title:"Green Firewood",
                    description:"Premium hardwood, season it yourself and save!",
                    info: "$205 cord. Delivery Included",
                    show:true
                },
                {
                    title:"On-site Firewood Processing",
                    description:"Processing wood is not easy work. We'll come to you to cut, split, and stack your own firewood resources. Call for more information!",
                    info: "Call for more information.",
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