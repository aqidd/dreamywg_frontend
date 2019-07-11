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
  chatList: userId => axios.get(serverUrl+'/chat/', {
    params: {
      userId: userId
    }
  }), //retrieve chat list
  chatUnit: (messageId, senderId, receiverId) => axios.get(serverUrl + '/chatunit', {
    params: {
      messageId: messageId,
      user1:senderId,
      user2:receiverId
    }
  }), //retrieve chat unit
  createFlatofferer: data => axios.post(`${serverUrl}/flatofferers`, data, config),
  createFlatseeker: data => axios.post(`${serverUrl}/flatseekers`, data, config),
}

export default Api
