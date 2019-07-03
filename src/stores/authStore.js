import { action, observable } from 'mobx'
import axios from 'axios'
import network from '../util/network'

class AuthStore {
  token = 'asdf'
  @observable credentials = {
    email: '',
    password: ''
  }
  @observable requestStatus = {
      completed: false,
      error: false
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

  @action loginv2 = credentials => {
      network.login(credentials).then( response => {
        this.setToken(response.data.token)
        this.requestStatus.completed = true
        this.requestStatus.error = false
      }).catch( error => {
        this.requestStatus.completed = true
        this.requestStatus.error = true
      })
  }

  hasToken = () => this.token !== ''
}

const Store = () => new AuthStore()

export default Store
