/**
 * 每个板块单独的action-creator：把dispatch派发时候需要传递的action对象进一步统一封装，在react-redux中才能体现出好处
 */
import * as TYPE from '../action-types';
let todo = {
    add(payload){
        return {    //dispatch需要什么传递什么，这里就返回什么
            type:TYPE.TODO_ADD,
            payload
        }
    },
    filter(text){
        return {
            type:TYPE.TODO_FILTER,
            text
        }
    },
    changeState(listID,newState){
        return {
            type:TYPE.TODO_CHANGE,
            listID,
            newState
        }
    },
    deleteState(listID){
        return {
            type:TYPE.TODO_DELETE,
            listID
        }
    }
};

export default todo;
 