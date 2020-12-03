const initialState = {
  current_user: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {current_user: action.payload};
    case "REMOVE_CURRENT_USER":
      return initialState;
    default:
      return {...state};
  }
}

export default reducer;
