import { action, observable } from 'mobx'
import network from '../util/network'
import { merge } from 'lodash'

class Store {
  elementsPerPage = 3
  @observable data = []
  @observable searchItems = {}
  @observable currentStep = 1
  @observable totalResults
  @observable ready = true
  @observable filterValues = {}

  async initData() {
    try {
      this.filterValues = (await network.loadSearchProperties()).data
      await this.updateData(1)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  onSearch = async (values) => {
    try {
      await this.updateData(1, values)
    } catch (error) {
      console.log(`Error: ${error}`)
    }
  }

  @action switchPage = async newPage => {
    await this.updateData(newPage)
    this.currentStep = newPage
  }

  @action updateData = async (page, values) => {
    //create post request to update data from pagination
    if (values)
      this.filterValues = values

    const result = (await network.flatseekerSearch(merge(
      this.filterValues,
      {
        elementsPerPage: this.elementsPerPage,
        page: page
      }
    ))).data
    console.log(result)
    this.data = result.data
    this.totalResults = result.totalResults
  }
}

const SearchStore = new Store()
export default SearchStore
