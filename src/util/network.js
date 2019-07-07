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
  chatList: (senderId) => axios.get(serverUrl+'/chat',senderId), //retrieve chat list
  chatUnit: (messageId, senderId, receiverId) => axios.get(serverUrl + '/chatunit', messageId, senderId, receiverId), //retrieve chat unit
  saveChat: (messageId, senderId, receiverId, content, timestamp) => axios.post(serverUrl + '/savechat', messageId, senderId, receiverId, content, timestamp)
}

export default Api
