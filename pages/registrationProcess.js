import React, {Component} from 'react'
import {Steps} from 'antd';
import {Provider} from 'mobx-react'
import 'antd/dist/antd.css'
import RegistrationStepStore from '../stores/registrationStepStore'
import RegistrationFlatmatePreferences from "../components/container/registrationFlatmatePreferences";
import RegistrationFlatDetails from "../components/container/registrationFlatDetails";
import RegistrationFlatmates from "../components/container/registrationFlatmates";

const {Step} = Steps;


export default class RegistrationProcess extends Component {
  constructor(props) {
    super(props);
    this.store = RegistrationStepStore()

  }

  render() {
    const stepsComponent = steps.map(item => <Step key={item.title} title={item.title}/>);
    return (
      <Provider store={this.store}>
        <div>
          <Steps current={this.store.currentSteps}>
            {stepsComponent}
          </Steps>
          <div className="steps-content">
            {steps[this.store.currentSteps].content}
          </div>
          <div className="steps-action">

          </div>
        </div>
      </Provider>
    );
  }
}


const steps = [
  {
    title: 'General Information',
    content: <div>step 0</div>
  }, {
    title: 'Offerer or seeker?',
    content: <div>step 1</div>
  }, {
    title: 'Flat details',
    content: <RegistrationFlatDetails/>
  }, {
    title: 'Flatmates',
    content: <RegistrationFlatmates/>
  },
  {
    title: 'Flatmate preferences',
    content: <RegistrationFlatmatePreferences/>
  }
];
