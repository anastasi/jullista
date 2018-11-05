
export const addFriend = (friend) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('friends').add({
      ...friend,
      authorFirstName: 'Anastasia',
      authorLasttName: 'Yanvareva',
      authorId: 12345,
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'ADD_FRIEND', friend})
    }).catch((err)=>{
      dispatch({ type: 'CATCH_ERROR', err})
    })
  }
}