import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import 'antd/dist/antd.css'
import RegistrationRootStore from '../stores/registrationRootStore'
import RegistrationFlatmatePreferences from '../components/container/registration/registrationFlatmatePreferences'
import RegistrationFlatDetails from '../components/container/registration/registrationFlatDetails'
import RegistrationFlatmates from '../components/container/registration/registrationFlatmates'
import StepsContentContainer from '../components/container/registration/StepsContainer'
import RegistrationSummary from '../components/container/registration/registrationSummary'
import ChoiceContainer from '../components/presentation/registration/ChoiceContainer'
import BaseLayout from '../components/presentation/baseLayout'

export default class RegistrationProcess extends Component {
  constructor(props) {
    super(props)
    this.store = RegistrationRootStore()
  }

  render() {
    this.store.maxSteps = steps.length - 1
    return (
      <Provider store={this.store}>
        <BaseLayout>
          <StepsContentContainer data={steps} />
        </BaseLayout>
      </Provider>
    )
  }
}

const steps = [
  {
    title: 'Role?',
    content: ChoiceContainer
  },
  {
    title: 'Flat',
    content: RegistrationFlatDetails
  },
  {
    title: 'Flatmates',
    content: RegistrationFlatmates
  },
  {
    title: 'Prefs',
    content: RegistrationFlatmatePreferences
  },
  {
    title: 'Summary',
    content: RegistrationSummary
  }
]
