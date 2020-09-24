export default {
  addUserInfo(state,payload){
    state.userInfo.push(payload) 
    console.log(state.userInfo);
  }
}