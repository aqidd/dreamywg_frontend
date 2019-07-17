import React from 'react'
import { Redirect } from 'react-router-dom'

const withRedirect = Component =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        redirect: null
      }
    }
    render() {
      if (this.state.redirect !== null)
        return <Redirect to={this.state.redirect} push />
      return (
        <Component
          redirect={target => this.setState({ redirect: target })}
          {...this.props}
        />
      )
    }
  }

export default withRedirect
