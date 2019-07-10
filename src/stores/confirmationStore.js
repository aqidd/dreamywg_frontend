import {action, observable} from "mobx"
import network from '../util/network';

import React from 'react';

const serverUnavailable = "Server unavailable. Maybe try it later";

class Store {
  @observable result;

  constructor() {
    this.result = undefined
  }

  @action verify = (token) => {
    network.confirmation(token)
      .then((response) => {
        this.result = {state: true, data: response.data}
      })
      .catch((err) => {
        this.result = {state: false, data: err ? serverUnavailable : err.response.data};
      })
  }
}

const ConfirmationStore = () => new Store();

export default ConfirmationStore
