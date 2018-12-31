import {createActions} from 'reflux'

let actions = createActions({
    "loadData":{asyncResult: true,	sync: false},
    "setView":{asyncResult: true,	sync: false},
    "setImage":{asyncResult: true,	sync: false}
});

export default actions