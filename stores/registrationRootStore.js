import UserStore from './userStore'
import RegistrationStepStore from './registrationStepStore'

class RegistrationRootStore {
    constructor() {
        this.userStore = new UserStore(this)
        this.registrationStepStore = new RegistrationStepStore(this)
    }
}

const registrationRootStore = () => new RegistrationRootStore();

export default registrationRootStore
