/***
 * 1. state：容器中原有的状态信息，如果没有原有状态，给一个初始默认值
 * 2. action：dispatch任务派发的时候传递的行为对象，这个对象中必有一个type属性(操作的行为标识)，reducer根据type识别如何修改状态信息
 */
import * as TYPE from '../action-types'; //把所有的内容都获取，并重新命名为TYPE。TYPE对象中包含了所有导出的信息

export default function todo(state = {
    data: [],
    flag: 'all'  //标签切换标识
}, action) {
    state = JSON.parse(JSON.stringify(state));  //为了防止不直接修改原有的状态信息，把state进行深度克隆
    switch (action.type) {
        case TYPE.TODO_ADD:
            let { payload } = action;
            payload.id = state.data.length === 0 ? 1 : (parseFloat(state.data[state.data.length - 1]['id'] + 1))
            state.data.push(payload);
            break;
        
        case TYPE.TODO_FILTER:
            let {text} = action;
            state.flag = text;
            break;
        
        case TYPE.TODO_CHANGE:
            let {listID,newState} = action;
            let item = state.data.find(item=>item.id === listID);
            if(item){
                console.log('-------------');
                item.state = newState; //修改状态值
            }
            break;

        case TYPE.TODO_DELETE:
        {                           //用块级作用域包裹起来，防止变量冲突
            let {listID} = action;
            state.data = state.data.filter(item=>{
                // console.log(item.id,listID);
                return item.id != listID
            }); //保留下不等于这个id的项
        }
            break;



    }

    return state; //只有把最新的state返回，原有的状态才会修改
} 
