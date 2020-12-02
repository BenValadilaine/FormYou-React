import deepCloneObject from "../../helpers/deepClone";

const initialState = {
  current_user: {}
}

const reducer = (state = initialState, action) => {
  const newState = deepCloneObject(state)
  switch (action.type) {
    case "SET_CURRENT_USER":
      return newState.current_user = action.payload.current_user;
    default:
      return newState;
  }
}

export default reducer;