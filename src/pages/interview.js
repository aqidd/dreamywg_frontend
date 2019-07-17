import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import InterviewContainer from '../components/container/interview/InterviewContainer'

export default class Interview extends Component {
  render() {
    return (
      <Provider>
        <div>
          <InterviewContainer />
        </div>
      </Provider>
    )
  }
}
