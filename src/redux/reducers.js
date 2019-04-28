const initialState = {
  // userInfo: {
  //   name: '小光',
  //   gender: '男',
  // },
  isFirstTime: true,
  isLogin:false,
  loginAlready:false,
};

function reducers(state = initialState, action) {
  switch (action.type) {
    // case 'SET_USER_INFO':
    //   // 合并 userInfo 对象
    //   action.userInfo = Object.assign({}, state.userInfo, action.userInfo);

    //   // 更新状态
    //   return Object.assign({}, state, { userInfo: action.userInfo });

    // case 'CLEAR_REDUX_STORE':
    //   // 清空 store 中的 userInfo 信息
    //   return { userInfo: {} };
    
    case 'WELCOME_HOME':
    
      return Object.assign({}, state, { isFirstTime: false });

    case 'WELCOME_OUT':
      return Object.assign({}, state, { isFirstTime: true });

    case 'LOGIN_IN':
      return Object.assign({}, state, { isLogin: true });

    case 'LOGIN_OUT':
      return Object.assign({}, state, { isLogin: false });

    case 'LOGIN_ALREADY':
      let {trueOrFalse} = action;
      return Object.assign({}, state, { loginAlready: trueOrFalse });

    default:
      return state;
  }
}

export default reducers;
