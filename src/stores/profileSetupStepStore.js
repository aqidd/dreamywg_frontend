import {action, observable, toJS} from 'mobx'

import Api from '../util/network'
import {merge} from "lodash";

class Store {
  @observable currentSteps = 0;
  @observable images = [];
  @observable status;
  @observable imagePreview = {
    show: false,
    url: ''
  };
  @observable data = {};

  constructor(rootStore, isSeeker, maxSteps) {
    this.rootStore = rootStore;
    this.isSeeker = isSeeker;
    this.maxSteps = maxSteps
  }

  getBase64 = image => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onLoad = () => resolve(reader.result);
      reader.onerror = error => reject(error)
    })
  };

  isMax = () => this.currentSteps === this.maxSteps;
  isMin = () => this.currentSteps === 0;

  @action setImages = ({fileList}) => {
    this.images = fileList
  };

  @action onPreviewCancel = () => {
    console.log('triggered');
    this.imagePreview.show = false
  };

  @action toggleImagePreview = async file => {
    if (file !== undefined) {
      if (!file.url && file.preview)
        file.preview = await this.getBase64(file.originFireObj);
      this.imagePreview.url = file.url || file.preview
    }
    this.imagePreview.show = true
  };


  @action nextStep = async () => {
    console.log(toJS(this.data));
    if (!this.isMax())
      this.currentSteps += 1;
    else {
      if (this.isSeeker) {
        this.data.type = "SEEKER";
        if (this.images.length > 0)
          this.data.personalInformation.image = this.images[0];
      } else {
        this.data.type = "OFFERER";
        if (this.images.length > 0)
          this.data.rooms[0].images = this.images[0];
      }
      try {
        (this.isSeeker) ? await Api.createFlatseeker(this.data) : await Api.createFlatofferer(this.data);
        console.log('User was successfully created as Seeker or Offerer');
        this.status = true
      } catch (e) {
        this.status = false
      }
    }
  };

  @action
  prevStep = () => !this.isMin() && (this.currentSteps -= 1);

  @action
  updateData = data =>
    (this.data = merge(this.data, data))
}

export default Store
