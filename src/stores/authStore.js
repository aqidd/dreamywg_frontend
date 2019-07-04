import { action, observable } from 'mobx'
import axios from 'axios'
import network from '../util/network'

class AuthStore {
  token = 'asdf'
  @observable credentials = {
    email: '',
    password: ''
  }

  constructor() {
    this.initData()
  }

  initData() {}

  setToken = token => {
    this.token = token
    localStorage.setItem('token', token)
  }

  get getToken() {
    return localStorage.getItem('token')
  }

  @action login = async credentials => {
    return network.login(credentials)
  }

  hasToken = () => this.token !== ''
}

const Store = () => new AuthStore()

export default Store
