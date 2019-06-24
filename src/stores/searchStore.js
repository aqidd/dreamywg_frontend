import { action, observable, toJS, computed } from 'mobx'
import axios from 'axios'
import network from '../util/network'

class Store {
  @observable data = [
    {
      img:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      name: 'Novum Hotel München – Am Hauptbahnhof',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when.',
      recommendation: 95,
      location: 'Oberschleißheim',
      price: 540,
      sponsored: true
    },
    {
      img:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      name: 'Novum Hotel München – Am Hauptbahnhof',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when.',
      recommendation: 72,
      location: 'Oberschleißheim',
      price: 240,
      sponsored: false
    },
    {
      img:
        'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
      name: 'Novum Hotel München – Am Hauptbahnhof',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when.',
      recommendation: 84,
      location: 'Oberschleißheim',
      price: 740,
      sponsored: false
    }
  ]
  @observable currentStep = 1
  @observable totalFound = 100
  @observable ready = true
  @observable filters = ['Matched', 'Price', 'Name', 'Rating']
  @observable sortBy = 'Matched'

  constructor() {
    this.initData()
  }

  initData() {
    //create post request to get data from here
  }

  @computed get getTotalPage() {
    console.log(Math.round(this.totalFound / 3))
    return Math.round(this.totalFound / 3)
  }

  @computed get getIntroTitle() {
    return 'Our suggest by ' + this.sortBy.toLowerCase()
  }

  @action switchPage = newPage => {
    this.updateData(newPage)
    this.currentStep = newPage
    console.log('page: ' + this.currentStep)
  }

  @action submitFilter(data) {
    //create post request to get new data from here
  }

  @action updateData() {
    //create post request to update data from pagination
  }

  @action sortData(type) {
    const determiner = type === this.filters[0].toLowerCase() ? -1 : 1
    const invert = determiner * -1
    const temp = toJS(this.data)
    temp.sort((a, b) =>
      a[type] == b[type] ? 0 : a[type] > b[type] ? determiner : invert
    )
    this.sortBy = type
    this.data = temp
  }
}

const SearchStore = new Store()
export default SearchStore
