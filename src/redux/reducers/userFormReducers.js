import {USER_INFORMATION} from "../../constants"


const initialState = {
  userName:"",
  passWord:"",
  loggedIn:"NO",
}
export const userInformationReducer = (state=initialState,action)=>{
  switch(action.type){
    case USER_INFORMATION:
      console.log("in reducer");
      console.log(action.payload)
      return  action.payload;
        
        // userName: action.payload.userName,
        // passWord: action.payload.passWord,
        // loggedIn: action.payload.loggedIn,
        
    default:
      return state
  }
}
export default userInformationReducer;