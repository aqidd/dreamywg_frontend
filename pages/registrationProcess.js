import React, {Component} from 'react'
import {Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import RegistrationStepStore from '../stores/registrationStepStore'
import RegistrationFlatmatePreferences from '../components/container/Registrations/registrationFlatmatePreferences'
import RegistrationFlatDetails from '../components/container/Registrations/registrationFlatDetails'
import RegistrationFlatmates from '../components/container/Registrations/registrationFlatmates'
import StepsContentContainer from '../components/container/Registrations/StepsContainer'

import RegistrationSummary from "../components/container/registrationSummary";

import ChoiceContainer from '../components/presentation/registration/ChoiceContainer'

export default class RegistrationProcess extends Component {
  constructor(props) {
    super(props);
    this.store = RegistrationStepStore()
  }

  render() {
    this.store.maxSteps = steps.length - 1;
    return (
      <Provider store={this.store}>
        <StepsContentContainer data={steps}/>
      </Provider>
    )
  }
}

const steps = [
  {
    title: 'General Information',
    content: <div>step 0</div>,
    next: 'Next',
    back: 'Back'
  },
  {
    title: 'Offerer or seeker?',
    content: <ChoiceContainer/>,
    next: 'Next',
    back: 'Back'
  },
  {
    title: 'Flat details',
    content: <RegistrationFlatDetails/>,
    next: 'Next',
    back: 'Back'
  },
  {
    title: 'Flatmates',
    content: <RegistrationFlatmates/>,
    next: 'Next',
    back: 'Back'
  },
  {
    title: 'Flatmate preferences',
    content: <RegistrationFlatmatePreferences/>,
    next: 'Next',
    back: 'Back'
  }, {
    title: 'Summary',
    content: <RegistrationSummary/>,
    next: 'Done',
    back: 'Back'
  }
];
