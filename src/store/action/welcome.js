/**
 * 每个板块单独的action-creator：把dispatch派发时候需要传递的action对象进一步统一封装，在react-redux中才能体现出好处
 */
import * as TYPE from '../action-types';
let vote = {
    gotoHome(){
        return {    //dispatch需要什么传递什么，这里就返回什么
            type:TYPE.WELCOME_HOME
        }
    },
};

export default vote;
 