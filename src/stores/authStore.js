import {action, observable} from 'mobx'
import axios from 'axios'
import network from '../util/network'

class AuthStore {
    @observable token = ''
    @observable credentials = {
        email: '',
        password: ''
    }

    constructor(rootStore) {
        this.rootStore = rootStore
        this.initData();
    }

    initData() {
    }
}

export default AuthStore