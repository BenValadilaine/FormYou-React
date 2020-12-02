import deepCloneObject from "../../helpers/deepClone";
import Cookies from "js-cookie"

const initialState = {
  current_user: {}
}

const reducer = (state = initialState, action) => {
  const newState = deepCloneObject(initialState)
  switch (action.type) {
    case "SET_CURRENT_USER":
      Cookies.set("current_user", action.payload.current_user);
      return newState.current_user = action.payload.current_user;
    default:
      return newState;
  }
}

export default reducer;