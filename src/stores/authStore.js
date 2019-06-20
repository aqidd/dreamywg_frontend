import {action, observable} from 'mobx'
import axios from 'axios'
import network from '../util/network'

class AuthStore {
    @observable token = ''
    @observable credentials = {
        email: '',
        password: ''
    }

    constructor() {
        this.initData();
    }

    initData() {
    }

    getToken() {
        return this.token;
    }

    @action login =  async(credentials) => {
        console.log('start logging in')
        const response = await network.login(credentials);
        console.log(response);
        return response;
    }
}

const initStore = () => new AuthStore();

export default initStore