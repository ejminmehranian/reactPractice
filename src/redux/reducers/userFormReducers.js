import {USER_INFORMATION} from "../../constants"

export const userInformationReducer = (state = {},action)=>{
  switch(action.type){
    case USER_INFORMATION:
      return {
        result: action.payload
      }   
    default:
      return state
  }
}
export default userInformationReducer;