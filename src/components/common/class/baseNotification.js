import React from 'react'
import { notification, Icon } from 'antd'
import { Redirect } from 'react-router-dom'

const withNotification = Component =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        redirect: null
      }
      this.notify = this.notify.bind(this)
    }
    notify(title, description, url) {
      const config = {
        message: title,
        description: description,
        icon: <Icon type="message" style={{ color: '#108ee9' }} />,
        onClick: () => {
          this.setState({ redirect: url })
        },
        duration: 3
      }
      notification.open(config)
    }
    render() {
      if (this.state.redirect !== null)
        return <Redirect to={this.state.redirect} />
      return (
        <Component
          notify={(title, description, url) =>
            this.notify(title, description, url)
          }
          {...this.props}
        />
      )
    }
  }

export default withNotification
