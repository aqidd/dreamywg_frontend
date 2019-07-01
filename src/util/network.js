import axios from 'axios'

const serverUrl = 'http://localhost:4006'

let config = {
  headers: {
    authentication: ''
  }
}

const Api = {
  login: credentials => axios.post(serverUrl + '/users/login', credentials, config),
  register: userData => axios.post(`${serverUrl}/users`, userData, config),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  profileOffer: data => axios.post(`${serverUrl}/flatofferer/`, data, config),
  profileSeeker: data => axios.post(`${serverUrl}/flatseeker/`, data, config)
}

export default Api
