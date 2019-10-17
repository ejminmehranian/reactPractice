
import {USER_INFORMATION} from "../../constants";
import axios from "axios";
export const userInformationAction = (data) => async (dispatch) => {
  //DO AXIOS SAVE THE INFO GET VALUE BACK THEN
  console.log(data)
  const data2 = await axios.get(`http://localhost:3000/`)
  console.log(data2)
  dispatch({
    type: USER_INFORMATION,
    payload: data2
  })
}

export default userInformationAction;