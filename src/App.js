import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import LandingScreen from './pages/landing'
import ProfileSetupOfferer from './pages/profileSetupOfferer'
import ProfileSetupSeeker from './pages/profileSetupSeeker'
import Register from './pages/register'

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingScreen} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/setupofferer" component={ProfileSetupOfferer} />
      <Route exact path="/setupseeker" component={ProfileSetupSeeker} />
    </BrowserRouter>
  )
}

export default App
