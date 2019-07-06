import React from 'react'
import FlatDetailsTab from '../components/container/flatDetailsTabContainer'
import { Provider } from 'mobx-react'
import InterviewStore from '../stores/interviewStore'

export default class FlatDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const interviewStore = InterviewStore()
    return (
      <Provider interviewStore = {interviewStore}>
        <div style={pageStyle}>
          <FlatDetailsTab />
        </div>
      </Provider>
    )
  }
}

const pageStyle = {
  padding: '30px'
}
