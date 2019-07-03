import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import LandingScreen from './pages/landing'
import ProfileSetupOfferer from './pages/profileSetupOfferer'
import ProfileSetupSeeker from './pages/profileSetupSeeker'
import Register from './pages/register'
import ConfirmationScreen from "./pages/confirmation"
import RoleSelection from "./pages/roleSelection"
import SearchScreen from './pages/search'
import Login from './pages/login'
import store from './stores/authStore'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { hasToken } = store()
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
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
        <Route exact path="/roleselection" component={RoleSelection} />
        <Route exact path="/confirmation/:token" component={ConfirmationScreen} />
        <Route exact path="/search" component={SearchScreen}/>
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
