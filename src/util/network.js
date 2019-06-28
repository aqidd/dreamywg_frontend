import axios from 'axios'

const serverUrl = 'http://localhost:4005'

let config = {
  headers: {
    authentication: ''
  }
}

const Api = {
  login: (username, password) =>
    axios.post(serverUrl + '', { username, password }, config),
  register: userData => axios.post(`${serverUrl}/users`, userData, config),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  registerFacebook: () => axios.post(`${serverUrl}/registerFacebook`, userData, config),
  registerLinkedin: () => axios.post(`${serverUrl}/registerLinkedin`, code, client_id, client_secret, redirect_uri)
}

export default Api
