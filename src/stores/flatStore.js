import {action, observable} from 'mobx'
import axios from 'axios'
import network from '../util/network'

class FlatStore {
    @observable flat = null

    constructor(rootStore) {
        this.rootStore = rootStore
        this.initData();
    }

    initData() {
        this.flat = {
            title: 'Some Flat in Sendling',
            address: ''
        };
    }

    @action async fetchFlat() {
        
    }
}

export default FlatStore