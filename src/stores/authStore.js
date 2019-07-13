import {action, observable} from 'mobx'
import network from '../util/network'

class AuthStore {
  @observable credentials = {
    email: '',
    password: ''
  }

  @observable response = {}

  constructor() {
    this.initData()
  }

  initData() {
    this.response = {
      success: false,
      completed: false,
      errorMessage: ''
    }
  }

  setToken = token => {
    localStorage.setItem('token', token)
  }

  get getToken() {
    return localStorage.getItem('token')
  }

  @action login = async credentials => {
    return network.login(credentials)
      .then((response) => {
        const token = response.data.token;
        this.setToken(token);
        this.response = {
          success: true,
          completed: true,
          errorMessage: ''
        }
      })
      .catch((error) => {
        if (error.response) {
          this.response = {
            success: false,
            completed: true,
            errorMessage: error.response.data
          }
        } else {
          this.response = {
            success: false,
            completed: true,
            errorMessage: 'Sorry, something went wrong. Please try it again.'
          }
        }
      })
  }

  hasToken = () => {
    return localStorage.getItem('token') !== null
  }
}

const Store = () => new AuthStore()

export default Store
