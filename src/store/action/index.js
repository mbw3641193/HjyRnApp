/***
 * 把每一个模块单独设定的action 合并成一个总的 action
 * 
 */
import vote from './vote';
import todo from './todo';
import welcome from './welcome';

let action = {
    vote,
    todo,
    welcome
};

export default action;