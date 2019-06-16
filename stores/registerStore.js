import {action, observable} from 'mobx'
import axios from 'axios'

class Store {
    @observable user = null
    constructor(initialData = {}) {
        this.user = initialData;
    }

    async register(userData) {
        const response = await axios.post('');
        this.setUser(response);
    }

    @action setUser(userData) {
        this.user = userData;
    }
}

const registerStore = () => new Store()

export default registerStore