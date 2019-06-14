import {action, observable} from "mobx"
import axios from "axios";
import Router from "next/dist/client/router";

class Store {
  @observable confirmationResult = {msg: "", status: true};

  constructor() {
    this.confirmationResult.msg = "Pending...";
    this.confirmationResult.status = true;
  }

  @action verify = () => {
    axios.get(`http://localhost:4005/confirmation/${Router.query.token}`)
      .then((response) => {
        this.confirmationResult.msg = response.data;
        this.confirmationResult.status = true;
      })
      .catch((err) => {
        this.confirmationResult.status = false;

        if (!err) this.confirmationResult.status = "Server unavailable. Maybe try it later";
        else this.confirmationResult.status = err.response.data
      })
  }
}

const initStore = () => new Store();

export default initStore
