import { action, observable } from 'mobx'

class RegisterStepStore {
  @observable currentSteps = 0
  @observable maxSteps = 2

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  isMax = () => this.currentSteps === this.maxSteps
  isMin = () => this.currentSteps === 0

  @action nextStep = () => !this.isMax() && (this.currentSteps += 1)

  @action prevStep = () => !this.isMin() && (this.currentSteps -= 1)

}

export default RegisterStepStore