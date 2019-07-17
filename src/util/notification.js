import React from 'react'
import { withRouter } from 'react-router-dom'
import { notification } from 'antd'

const Notification = ({ title, description, link, history }) =>
  notification.open({
    message: title,
    description: description,
    onClick: () => history.push(link)
  })

export default withRouter(Notification)
