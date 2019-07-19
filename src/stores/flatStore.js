import {action, observable, toJS} from 'mobx'
import network from '../util/network'
import {convertAddressToCoordinate} from '../util/location'

class FlatStore {
    @observable id = ''
    @observable flat = null
    @observable flatCoordinate = {}

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
            flatEquipment: {},
            coordinate: {}
        };
    }

    @action setId = (id) => {
        this.id = id;
    }

    @action fetchFlat = async () => {
        const response = await network.getFlat(this.id)
        this.flat = response.data

        this.flatCoordinate = await convertAddressToCoordinate(`${this.flat.region} ${this.flat.street}, ${this.flat.houseNr}`)
        this.flat.coordinate = this.flatCoordinate

        return this.flat
    }
}

export default FlatStore