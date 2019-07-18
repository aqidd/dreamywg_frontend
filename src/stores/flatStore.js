import { action, observable, toJS } from 'mobx'
import network from '../util/network'
import { convertAddressToCoordinate } from '../util/location'

class FlatStore {
  @observable id = ''
  @observable flat = null
  @observable flatCoordinate = {}

  constructor(rootStore) {
    this.rootStore = rootStore
    this.initData()
  }

  initData() {
    this.flat = {
      title: 'Some Flat in Sendling',
      rooms: [
        {
          images: ['some url'],
          rent: 1200,
          dateAvailableRange: ['some date']
        },
        {
          images: ['some url'],
          rent: 1200,
          dateAvailableRange: ['some date']
        }
      ],
      flatmates: [],
      stores: [],
      stations: [],
      flatEquipment: {}
    }
  }

  @action setId = id => {
    this.id = id
  }

  @action fetchFlat = async () => {
    const response = await network.getFlat(this.id)
    this.flat = response.data

    // TODO (Q) configure geocoding with gmaps or other provider
    this.flatCoordinate = await convertAddressToCoordinate(
      `${this.flat.region} ${this.flat.street}, ${this.flat.houseNr}`
    )
    console.log(toJS(this.flatCoordinate))
    return response.data
  }
}

export default FlatStore
