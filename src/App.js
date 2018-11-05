import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import GiftsList from './components/friends/GiftsList'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AddFriend from './components/friends/AddFriend'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/friend/:id" component={GiftsList}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/add" component={AddFriend}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
