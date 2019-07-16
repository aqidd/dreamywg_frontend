import {action, observable} from 'mobx'
import network from '../util/network'

class AuthStore {
  @observable credentials = {
    email: '',
    password: ''
  }

  @observable response

  constructor() {
    if (!this.response)
      this.initData()
  }

  initData() {
    this.response = {
      success: false,
      completed: false,
      errorMessage: '',
      type: undefined
    }
  }

  setToken = token => {
    console.log(localStorage.getItem('token'))
    localStorage.setItem('token', token)
    console.log(localStorage.getItem('token'))

  }

  getToken() {
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
          errorMessage: '',
          type: response.data.type ? response.data.type: null,
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
    console.log(`user has token: ${localStorage.getItem('token')}`)
    return localStorage.getItem('token') !== null
  }
}

const Store = () => new AuthStore()

export default Store
