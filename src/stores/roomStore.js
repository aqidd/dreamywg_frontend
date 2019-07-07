import {action, observable} from 'mobx'
import axios from 'axios'
import network from '../util/network'

class RoomStore {
    @observable room = null

    constructor(rootStore) {
        this.rootStore = rootStore
        this.initData();
    }

    initData() {
        this.room = {
            size: '30m'
        };
    }

    @action fetchRoom () {

    }
}

export default RoomStore