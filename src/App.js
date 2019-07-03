import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import LandingScreen from './pages/landing'
import ProfileSetupOfferer from './pages/profileSetupOfferer'
import ProfileSetupSeeker from './pages/profileSetupSeeker'
import Register from './pages/register'
import Login from './pages/login'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/setupofferer" component={ProfileSetupOfferer} />
        <Route exact path="/setupseeker" component={ProfileSetupSeeker} />
      </BrowserRouter>
    )
  }
}

const ProtectedRoute = ({ isAuth, ...others }) =>
  isAuth ? <Route {...others} /> : <Redirect to="/login" />
