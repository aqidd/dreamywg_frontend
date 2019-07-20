import { action, observable } from 'mobx'
import network from '../util/network'
import { merge } from 'lodash'

export const TYPE = {
  SEEKER: 'SEEKER',
  OFFERER: 'OFFERER'
}

class Store {
  @observable credentials = {
    email: '',
    password: ''
  }

  @observable user = {}

  @observable loginResponse
  @observable token

  constructor() {
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken = token => {
    localStorage.setItem('token', token)
  }

  getUserId() {
    return localStorage.getItem('userId')
  }

  setUserId = id => {
    localStorage.setItem('userId', id)
  }

  getUserType() {
    return localStorage.getItem('userType')
  }

  setUserType = type => {
    localStorage.setItem('userType', type)
  }


  @action login = async credentials => {
    const response = await network.login(credentials)

    if (response) {
      const token = response.data.token
      this.user = response.data.user
      this.setUserId(this.user._id)
      this.setUserType(this.user.type)
      this.setToken(token)
    }
  }

  hasToken = () => {
    return localStorage.getItem('token') !== null
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
