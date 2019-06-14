import React, {Component} from 'react'
import { Steps, Button, message } from 'antd';
import { Provider } from 'mobx-react'
import 'antd/dist/antd.css'
import RegistrationStepStore from '../stores/registrationStepStore'
import RegistrationSteps from '../components/container/registrationSteps'
const { Step } = Steps;


export default class RegistrationProcess extends Component {
  constructor(props) {
    super(props)
    this.store = RegistrationStepStore()
  
  }
  render() {
    const stepsComponent = steps.map(item => <Step key={item.title} title={item.title} />)
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
    title: 'Your Profile',
    content: <div>step 1</div>
  }, {
    title: 'Who are you?',
    content: <div>step 2</div>
  }, {
    title: 'Flat preferences',
    content: <RegistrationSteps/>
  }, {
    title: 'Completed',
    content: <div> final step </div>
  }
]
