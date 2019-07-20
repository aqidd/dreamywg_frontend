import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import InterviewContainer from '../components/container/interview/InterviewContainer'
import DefaultHeader from '../components/common/defaultHeader'

export default class Interview extends Component {
  render() {
    return (
      <Provider>
        <div>
          <DefaultHeader/>
          <InterviewContainer />
        </div>
      </Provider>
    )
  }
}
