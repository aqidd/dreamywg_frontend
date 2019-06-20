import UserStore from './userStore'
import ProfileSetupStepStore from './profileSetupStepStore'

class RegistrationRootStore {
    constructor() {
        this.userStore = new UserStore(this)
        this.profileSetupStepStore = new ProfileSetupStepStore(this)
    }
}

const registrationRootStore = () => new RegistrationRootStore();

export default registrationRootStore
