import {observable} from "mobx"


class Store {

  @observable currentSteps = 4;


  constructor() {

  }


  nextStep = () => this.currentSteps += 1;

  prevStep = () => this.currentSteps -= 1


}

const RegistrationStepStore = () => new Store();

export default RegistrationStepStore
