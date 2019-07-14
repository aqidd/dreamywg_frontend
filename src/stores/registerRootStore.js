import RegisterStepStore from './registerStepStore'
import AuthStore from "./authStore";

class RegisterRootStore {
    constructor() {
        this.authStore = new AuthStore()
        this.stepStore = new RegisterStepStore()
    }
}

const registerRootStore = () => new RegisterRootStore();

export default registerRootStore
