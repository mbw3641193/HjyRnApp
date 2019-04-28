// export function setUserInfo(userInfo) {
//   return {
//     type: 'SET_USER_INFO',
//     userInfo,
//   };
// }
// export function clearReduxStore() {
//   return {
//     type: 'CLEAR_REDUX_STORE',
//   };
// }

export function firstTimeCome(){
  return {    
      type:'WELCOME_HOME',
  }
}

export function firstTimeOut(){
  return {    
      type:'WELCOME_OUT',
  }
}

export function login(){
  return {    
      type:'LOGIN_IN',
  }
}

export function logout(){
  return {    
      type:'LOGIN_OUT',
  }
}

export function login_already(trueOrFalse){
  return {    
      type:'LOGIN_ALREADY',
      trueOrFalse
  }
}



