import UserStore from './userStore'
import ProfileSetupStepStore from './profileSetupStepStore'

class RegistrationRootStore {
    constructor(isSeeker, maxSteps) {
        this.userStore = new UserStore(this)
        this.profileSetupStepStore = new ProfileSetupStepStore(this, isSeeker, maxSteps)
    }
}

const registrationRootStore = (isSeeker, maxSteps) => new RegistrationRootStore(isSeeker, maxSteps);

export default registrationRootStore
