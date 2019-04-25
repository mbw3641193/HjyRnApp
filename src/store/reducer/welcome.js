/***
 * 1. state：容器中原有的状态信息，如果没有原有状态，给一个初始默认值
 * 2. action：dispatch任务派发的时候传递的行为对象，这个对象中必有一个type属性(操作的行为标识)，reducer根据type识别如何修改状态信息
 */
import * as TYPE from '../action-types'; //把所有的内容都获取，并重新命名为TYPE。TYPE对象中包含了所有导出的信息
export default function welcome(state = {
    home: 0
}, action) {
    switch (action.type) { //判断行为标识
        case TYPE.WELCOME_HOME:
            let {homeNum} = action;
            state.home = homeNum;
            break;


    }

    return state; //只有把最新的state返回，原有的状态才会修改
} 



  
