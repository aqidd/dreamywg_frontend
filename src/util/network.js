import axios from 'axios'

const serverUrl = 'http://localhost:4005'

let config = {
  headers: {
    Authorization: `${localStorage.getItem('token')}`
  }
}

const Api = {
  login: credentials => axios.post(`${serverUrl}/users/login`, credentials, config),
  register: userData => axios.post(`${serverUrl}/users`, userData, config),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  createFlatofferer: data => axios.post(`${serverUrl}/flatofferers`, data, config),
  createFlatseeker: data => axios.post(`${serverUrl}/flatseekers`, data, config),
  registerWithSocialMedia: userData => axios.patch(`${serverUrl}/users/${userData._id}`, userData, config),

}

export default Api
