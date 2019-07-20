import { action, observable, toJS } from 'mobx'

import Api from '../util/network'
import { debounce, merge } from 'lodash'
import stations from '../util/shortStations'

class Store {
  @observable currentSteps = 0
  @observable images = []
  @observable status = false
  @observable imagePreview = {
    show: false,
    url: ''
  }
  @observable data = {}
  @observable filteredStations = []

  constructor(isSeeker, maxSteps) {
    this.isSeeker = isSeeker
    this.maxSteps = maxSteps
    this.search = debounce(this.search, 800)
  }

  search = value => {
    this.filteredStations = stations
      .filter(
        e => e.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
      )
      .slice(0, 10)
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
  isMin = () => this.currentSteps === 0

  @action setImages = ({ fileList }) => {
    this.images = fileList
  }

  @action onPreviewCancel = () => {
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

  @action nextStep = async () => {
    if (!this.isMax())
      this.currentSteps += 1;
    else {
      if (this.isSeeker) {
        this.data.type = 'SEEKER'
        if (this.images.length > 0)
          this.data.personalInformation.image = this.images[0].thumbUrl;
          this.data.personalInformation.fileImage = this.images[0].originFileObj;
      } else {
        this.data.type = "OFFERER";
        if (this.images.length > 0)
          this.data.rooms[0].image = this.images[0].thumbUrl;
          this.data.images = this.images.map(image => image.thumbUrl)
      }
      try {
        let resp = (this.isSeeker) ? await Api.createFlatseeker(this.data) : await Api.createFlatofferer(this.data);
        console.log('User was successfully created as Seeker or Offerer', resp);
        this.status = true
      } catch (e) {
        this.status = false
      }
    }
  }

  @action triggerUpdate = () => (this.status = true)

  @action
  prevStep = () => !this.isMin() && (this.currentSteps -= 1)

  @action
  updateData = data => (this.data = merge(this.data, data))
}

const ProfileSetupStepStore = (isSeeker, maxSteps) =>
  new Store(isSeeker, maxSteps)

export default ProfileSetupStepStore
