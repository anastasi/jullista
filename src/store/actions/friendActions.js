
export const addFriend = (friend) => {
  return (dispatch, getState) => {
    //async call
    dispatch({ type: 'ADD_FRIEND', friend})
  }
}