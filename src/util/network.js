import axios from 'axios'

const serverUrl = 'http://localhost:4005'

let config = {
  headers: {
    authentication: ''
  }
}

const Api = {
  login: credentials => axios.post(serverUrl + '/users/login', credentials, config),
  register: userData => axios.post(`${serverUrl}/users`, userData, config),
  registerWithSocialMedia: userData => axios.patch(`${serverUrl}/users/${userData._id}`, userData, config),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`)
}

export default Api
