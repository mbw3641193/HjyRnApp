/***
 * 把每一个模块单独设定的reducer 合并成一个总的 reducer
 * 
 * 为了保证合并reducer过程中，每个模块管理的状态信息不会相互冲突，redux在合并的时候把容器中的状态进行分开管理
 * 
 * 所以以后获取状态信息时，也需要把VOTE等板块名加上 : store.getState.vote.n
 */
import {combineReducers} from 'redux';
import vote from './vote';
import todo from './todo';

let reducer = combineReducers({
    vote,
    todo
});

export default reducer;