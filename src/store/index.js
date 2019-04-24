//创建store
import {createStore} from 'redux';
import reducer from './reducer'; //相当于import reducer from './reducer/index'; 不写index就会默认去找index

let store = createStore(reducer);

export default store;