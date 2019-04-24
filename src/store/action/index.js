/***
 * 把每一个模块单独设定的action 合并成一个总的 action
 * 
 */
import vote from './vote';
import todo from './todo';

let action = {
    vote,
    todo
};

export default action;