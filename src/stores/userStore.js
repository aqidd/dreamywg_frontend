import {action, observable} from 'mobx'
import axios from 'axios'
import network from '../util/network'
import {merge} from 'lodash'

class UserStore {
    @observable user = null

    constructor(rootStore) {
        this.rootStore = rootStore
        this.initData();
    }

    initData() {
        this.user = {
            firstName: ''
        };
    }

    @action register = async (userData) => {
        const response = await network.register(this.user);
    }

    @action setUserFormData = (userData) => {
        this.user[userData.target.name] = userData.target.value
    }

    @action saveUserData = (userData) => {
        this.user = merge(this.user, userData);
    }

    @action setUserId = (userId) => {
        this.user._id = userId;
    }

    @action async registerUser() {
        let response = ''
        try {
            if (this.user._id) {
                response = await network.registerWithSocialMedia(this.user);
            } else {
                response = await network.register(this.user);
            }
        } catch (e) {
            response = '{status: error}'
        }
        return response;
    }
}

export default UserStore