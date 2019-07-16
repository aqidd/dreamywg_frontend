import {action, observable} from 'mobx'
import network from '../util/network'

class FlatStore {
    @observable id = ''
    @observable flat = null

    constructor(rootStore) {
        this.rootStore = rootStore
        this.initData();
    }

    initData() {
        this.flat = {
            title: 'Some Flat in Sendling',
            rooms: [],
            flatmates: [],
            stores: [],
            stations: [],
            flatEquipment: {}
        };
    }

    @action setId = (id) => {
        this.id = id;
    }

    @action fetchFlat = async () => {
        const response = await network.getFlat(this.id)
        this.flat = response.data
        return response.data
    }
}

export default FlatStore