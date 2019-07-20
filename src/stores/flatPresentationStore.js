import { action, observable } from 'mobx'

class FlatPresentationStore {
  @observable showModal = false
  @observable hideInterview = true

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action showModal = () => this.showModal = true

  @action hideModal = () => this.showModal = false

  @action formatDate = (date) => {
    const _date = new Date(date)
    const options = { day: '2-digit', month: 'long', year: 'numeric'};
    return _date.toLocaleDateString('de-DE', options)
  }

  @action formatDateTime = (date) => {
    const _date = new Date(date)
    const options = { day: '2-digit', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    return _date.toLocaleDateString('de-DE', options)
  }
}

export default FlatPresentationStore
