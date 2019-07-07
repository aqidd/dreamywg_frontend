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
  createFlatofferer: data => axios.post(`${serverUrl}/flatofferer`, data, config),
  createFlatseeker: data => axios.post(`${serverUrl}/flatseeker`, data, config),
}

export default Api
