


import { observable, action } from "mobx"


class Store {

  @observable currentSteps = 2


    constructor() {

    }




     nextStep = () => this.currentSteps += 1

    prevStep = () => this.currentSteps -+ 1





}

const RegistrationStepStore = () => new Store()

export default RegistrationStepStore
