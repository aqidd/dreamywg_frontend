import {action, observable} from "mobx"

class Store {
  @observable selection = {role: ''};

  constructor() {
    this.selection.role = '';
  }

  @action setRole = (role) => {
  	console.log("setrole", role)
    this.selection.role = role;

  }
}

const initStore = () => new Store();

export default initStore