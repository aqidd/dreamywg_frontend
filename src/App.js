import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import LandingScreen from './pages/landing'
import ProfileSetupOfferer from './pages/profileSetupOfferer'
import ProfileSetupSeeker from './pages/profileSetupSeeker'
import Register from './pages/register'
import FlatDetails from './pages/flatDetails';
import Login from './pages/login';
import Chat from './pages/chat';

import store from './stores/authStore'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { hasToken } = store()
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingScreen}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/chat" component={Chat}/>
        <ProtectedRoute
          exact
          path="/setupofferer"
          component={ProfileSetupOfferer}
          isAuth={hasToken()}
        />
        <ProtectedRoute
          exact
          path="/setupseeker"
          component={ProfileSetupSeeker}
          isAuth={hasToken()}
        />
        <ProtectedRoute
          exact
          path="/flat"
          component={FlatDetails}
          isAuth={hasToken()}
        />
      </BrowserRouter>
    )
  }
}
const ProtectedRoute = ({ isAuth, component, ...others }) => (
  <Route
    {...others}
    render={props =>
      isAuth ? <component {...props} /> : <Redirect to="/login" />
    }
  />
)
