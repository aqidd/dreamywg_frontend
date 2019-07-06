import axios from 'axios'

const serverUrl = 'http://localhost:4007'

let config = {
  headers: {
    Authorization: `${localStorage.getItem('token')}`
  }
}

const Api = {
  login: credentials => axios.post(`${serverUrl}/users/login`, credentials, config),
  register: userData => axios.post(`${serverUrl}/users`, userData, config),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  patchUser: data => axios.patch(`${serverUrl}/users`, data, config),
}

export default Api
