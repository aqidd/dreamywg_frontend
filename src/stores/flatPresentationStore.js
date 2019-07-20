import { action, observable } from 'mobx'

class FlatPresentationStore {
  @observable showModal = false
  @observable hideInterview = true

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action showModal = () => this.showModal = true

  @action hideModal = () => this.showModal = false
}

export default FlatPresentationStore
