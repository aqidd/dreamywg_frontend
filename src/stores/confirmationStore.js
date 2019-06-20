import {action, observable} from "mobx"
import Router from "next/dist/client/router";
import network from '../util/network';

class Store {
  @observable confirmationResult = {msg: "", status: true};

  constructor() {
    this.confirmationResult.msg = "Pending...";
    this.confirmationResult.status = true;
  }

  @action verify = () => {
    network.confirmation(Router.query.token)
      .then((response) => {
        this.confirmationResult.msg = response.data;
        this.confirmationResult.status = true;
      })
      .catch((err) => {
        this.confirmationResult.status = false;
        if (err) this.confirmationResult.status = "Server unavailable. Maybe try it later";
        else this.confirmationResult.status = err.response.data
      })
  }
}

const initStore = () => new Store();

export default initStore
