import UserStore from './userStore'
import RegisterStepStore from './registerStepStore'

class RegisterRootStore {
    constructor() {
        this.userStore = new UserStore(this)
        this.registerStepStore = new RegisterStepStore(this)
    }
}

const registerRootStore = () => new RegisterRootStore();

export default registerRootStore
