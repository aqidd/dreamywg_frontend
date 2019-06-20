import {action, observable} from "mobx"
import Router from "next/dist/client/router";
import network from '../util/network';
import { Blob } from 'react-blob';

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