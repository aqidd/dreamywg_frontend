import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import ProfileSetupStepStore from '../stores/profileSetupStepStore'
import FlatDetails from '../components/container/profile-setup/offerer/flatDetails'
import Flatmates from '../components/container/profile-setup/offerer/flatmates'
import FlatmatePreferences from '../components/container/profile-setup/offerer/flatmatePreferences'
import StepsContentContainer from '../components/container/profile-setup/StepsContainer'
import BaseLayout from '../components/presentation/baseLayout'

export default class ProfileSetupOfferer extends Component {
  constructor(props) {
    super(props)
    this.store = ProfileSetupStepStore(false, steps.length - 1)
  }

  render() {
    return (
      <BaseLayout>
        <Provider store={this.store}>
          <StepsContentContainer data={steps} />
        </Provider>
      </BaseLayout>
    )
  }
}

const steps = [
  {
    title: 'Flat',
    content: FlatDetails
  },
  {
    title: 'Flatmates',
    content: Flatmates
  },
  {
    title: 'Flatmate Preferences',
    content: FlatmatePreferences
  }
]
