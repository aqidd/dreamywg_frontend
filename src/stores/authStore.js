import { action, observable } from 'mobx'
import network from '../util/network'
import { merge } from 'lodash'

class Store {
  @observable credentials = {
    email: '',
    password: ''
  }

  @observable user = {}

  @observable loginResponse
  @observable token

  constructor() {
    if (!this.loginResponse) this.initData()
  }

  initData() {
    this.loginResponse = {
      success: false,
      completed: false,
      errorMessage: '',
      type: undefined
    }
  }

  setToken = token => {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  @action login = async credentials => {
    return network
      .login(credentials)
      .then(response => {
        const token = response.data.token
        this.user = response.data.user
        this.setToken(token)

        this.loginResponse = {
          success: true,
          completed: true,
          errorMessage: '',
          type: response.data.type ? response.data.type : null,
          token: token
        }
      })
      .catch(error => {
        if (error.response) {
          this.loginResponse = {
            success: false,
            completed: true,
            errorMessage: error.response.data
          }
        } else {
          this.loginResponse = {
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

  firstLogin = () => {
    return localStorage.getItem('firsttime') !== null
  }

  @action saveUserData = userData => {
    this.user = merge(this.user, userData)
  }

  @action
  async registerUser() {
    try {
      const response = await network.register(this.user)
      this.user = response.data
      return response
    } catch (e) {
      return e
    }
  }
}

const AuthStore = () => new Store()

export default AuthStore
