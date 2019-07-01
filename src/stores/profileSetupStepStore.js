import { action, observable, toJS } from 'mobx'

import Api from '../util/network'

class Store {
  @observable currentSteps = 0
  @observable maxSteps = 5
  @observable images = []
  @observable status = {
    succeed: false,
    error: false
  }
  @observable imagePreview = {
    show: false,
    url: ''
  }
  @observable flatInfo = {}

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  getBase64 = image => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onLoad = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  isMax = () => this.currentSteps === this.maxSteps
  isMin = () => this.currentSteps === 3

  @action setImages = ({ fileList }) => {
    this.images = fileList
  }

  @action onPreviewCancel = () => {
    console.log('triggered')
    this.imagePreview.show = false
  }

  @action toggleImagePreview = async file => {
    if (file !== undefined) {
      if (!file.url && file.preview)
        file.preview = await this.getBase64(file.originFireObj)
      this.imagePreview.url = file.url || file.preview
    }
    this.imagePreview.show = true
  }

  @action nextStep = () => {
    console.log(toJS(this.flatInfo))
    if (!this.isMax()) this.currentSteps += 1
    else {
      //todo: submit!
      Api.profileOffer(this.flatInfo)
        .then(response => (this.status.succeed = true))
        .catch(error => (this.status.error = true))
    }
  }

  @action prevStep = () => !this.isMin() && (this.currentSteps -= 1)

  @action updateFlatInfo = data =>
    (this.flatInfo = { ...this.flatInfo, ...data })
}

export default Store
