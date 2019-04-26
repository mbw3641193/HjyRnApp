export function setUserInfo(userInfo) {
  return {
    type: 'SET_USER_INFO',
    userInfo,
  };
}
export function clearReduxStore() {
  return {
    type: 'CLEAR_REDUX_STORE',
  };
}

export function firstTimeCome(){
  return {    //dispatch需要什么传递什么，这里就返回什么
      type:'WELCOME_HOME',
  }
}

export function firstTimeOut(){
  return {    //dispatch需要什么传递什么，这里就返回什么
      type:'WELCOME_OUT',
  }
}


