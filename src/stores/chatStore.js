import {action, observable} from "mobx"

class Store {
  @observable credentials = {senderId:'', receiverId:''};
  @observable 

  constructor() {
    this.senderId = '';
    this.receiverId = '';
  }


}

const initStore = () => new Store();

export default initStore