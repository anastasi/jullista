const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN ERROR':
      console.log('Login error');
      return {
        ...state,
        authError: 'Login Faild'
      }
    case 'LOGIN_SUCCESS':
      console.log('Login Succeed');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Signed Out');
      return state
    default:
      return state;
  }
}

export default authReducer