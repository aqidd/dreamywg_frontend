import {action, observable} from 'mobx'
import axios from 'axios'
import network from '../util/network'

class Store {
    @observable user = null
    @observable currentSteps = 0

    constructor() {
        console.log('initial data')
        this.currentSteps = 0
        this.user = {
            firstName: ''
        };
    }

    @action register = async (userData) => {
        const response = await network.register(this.user);
        console.log(response)
    }

    @action setUserData = (userData) => {
        this.user[userData.target.name] = userData.target.value
    }

    @action async registerUser() {
        console.log('starting to register user')
        let response = ''
        try {
            response = await network.register(this.user);
        } catch (e) {
            console.log(e);
            response = '{status: error}'
        }
        return response;
    }

    @action getCurrentSteps() {
        return this.currentSteps;
    }

    @action stepForward() {
        this.currentSteps++;
        console.log(this.currentSteps)
    }
}

const registerStore = () => new Store();

export default registerStore