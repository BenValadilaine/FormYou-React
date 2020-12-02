

const setCurrentUser = (current_user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: current_user
  }
}


export { setCurrentUser }
