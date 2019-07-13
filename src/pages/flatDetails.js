import React from 'react'
import FlatDetailsTab from '../components/container/flatDetailsTabContainer'
import { Provider } from 'mobx-react'
import InterviewStore from '../stores/interviewStore'
import FlatDetailsRootStore from '../stores/flatDetailsRootStore'

export default class FlatDetails extends React.Component {
  constructor(props) {
    super(props)
    this.flatDetailsRootStore = new FlatDetailsRootStore();
  }

  render() {
    const interviewStore = InterviewStore()
    return (
      <Provider interviewStore = {this.flatDetailsRootStore}>
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
