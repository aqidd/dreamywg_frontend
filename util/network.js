import axios from 'axios'

const serverUrl = "http://localhost:4005";

let config = {
  headers: {
    authentication: "",
  }
};

const currentURL = URL.devUrl

const Api = {
  login: (username, password) => axios.post(currentUrl + "", {username, password}, config),
  register: (userData) => axios.post(`${currentUrl}/users`, userData, config),
  confirmation: (token) => axios.get(`${currentUrl}/confirmation/${token}`)
};


export default Api
