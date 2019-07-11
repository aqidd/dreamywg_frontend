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
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  chatList: userId => axios.get(serverUrl+'/chat/', {
    params: {
      userId: userId
    }
  }), //retrieve chat list
  chatUnit: (messageId, senderId, receiverId) => axios.get(serverUrl + '/chatunit', messageId, senderId, receiverId), //retrieve chat unit
}

export default Api
