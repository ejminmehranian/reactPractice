
import {USER_INFORMATION} from "../../constants";
export const userInformation = (data="none") => dispatch =>{
  dispatch({
    type: USER_INFORMATION,
    payload: data
  })
}