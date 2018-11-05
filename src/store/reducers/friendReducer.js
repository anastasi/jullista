const initState = {
  friends: [
    {
      "name": "Kelly Hayden",
      "email": "vitae.sodales.nisi@Vestibulumante.edu",
      "status": "Not read yet",
      "id": "1670050938099"
    },
    {
      "name": "Christopher Navarro",
      "email": "porttitor.eros.nec@nunc.net",
      "status": "Repeat request",
      "id": "1698022559699"
    },
    {
      "name": "Zeph Pace",
      "email": "nunc.sed.pede@Suspendisse.ca",
      "status": "Read",
      "id": "1687071268099"
    }
  ]
}

const friendReducer = (state = initState, action) => {

  switch (action.type) {
    case 'ADD_FRIEND':
    console.log('Friend added', action.friend)
  }
  return state
}

export default friendReducer