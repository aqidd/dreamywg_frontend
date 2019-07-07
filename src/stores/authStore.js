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
        return network.login(credentials);
    }

    hasToken = () => this.token !== ''
}

const Store = () => new AuthStore();

export default Store