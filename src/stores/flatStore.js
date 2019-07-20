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
      coordinate: {},
      title: 'Some Flat dat ist very very Gut',
      flatshareType: 'Yearly',
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
      stations: ['ShubU station'],
      longDescription:
        " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      flatEquipment: {
        parkingLot: true,
        livingroom: true,
        shower: true,
        bathtub: true,
        kitchen: true,
        internet: true,
        balcony: true,
        terrace: true,
        garden: false,
        washingMachine: true,
        dishwasher: true
      }
    }
  }

  @action setId = id => {
    this.id = id
  }

  equipmentAsIcon = () => {
    let result = []
    Object.keys(this.flat.flatEquipment).forEach(key =>
      this.flat.flatEquipment[key] ? result.push(key) : null
    )
    result = result.map(element => {
      switch (element) {
        case 'parkingLot':
          return { parkingLot: 'car' }
        case 'livingroom':
          return { livingroom: 'customer-service' }
        case 'shower':
          return { shower: 'sound' }
        case 'bathtub':
          return { bathtub: 'filter' }
        case 'kitchen':
          return { kitchen: 'upload' }
        case 'internet':
          return { internet: 'wifi' }
        case 'balcony':
          return { balcony: 'upload' }
        case 'terrace':
          return { terrace: 'thunderbolt' }
        case 'garden':
          return { garden: 'star' }
        case 'washingMachine':
          return { washingMachine: 'wallet' }
        case 'dishWasher':
          return { dishWasher: 'switcher' }
      }
    })
    return Object.assign({}, ...result)
  }

  @action fetchFlat = async () => {
    const response = await network.getFlat(this.id)
    this.flat = response.data

    this.flatCoordinate = await convertAddressToCoordinate(
      `${this.flat.region} ${this.flat.street}, ${this.flat.houseNr}`
    )
    console.log(toJS(this.flatCoordinate))
    return response.data
  }

  @action fetchOffererFlat = async () => {
    const response = await network.getMyFlat(this.id)
    this.flat = response.data

    this.flatCoordinate = await convertAddressToCoordinate(
      `${this.flat.region} ${this.flat.street}, ${this.flat.houseNr}`
    )
    console.log(toJS(this.flatCoordinate))
    return response.data
  }
}

export default FlatStore
