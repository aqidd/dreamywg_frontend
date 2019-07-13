import axios from 'axios'

const serverUrl = 'http://localhost:4005'

let config = () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem('token')}`
    }
  }
};

const Api = {
  login: credentials => axios.post(`${serverUrl}/users/login`, credentials, config()),
  register: userData => axios.post(`${serverUrl}/users`, userData, config()),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  chatList: () => axios.get(serverUrl+'/chat/', config()), //retrieve chat list
  chatUnit: (id) => axios.get(serverUrl + '/chatunit', {
    params: {
      _id: id
    }
  }), //retrieve chat unit
  createFlatofferer: data => axios.post(`${serverUrl}/flatofferers`, data, config()),
  createFlatseeker: data => axios.post(`${serverUrl}/flatseekers`, data, config()),
  loadSearchProperties: () => axios.get(`${serverUrl}/flatseekers/loadSearchProperties`, config()),
  flatseekerSearch: filters => axios.post(`${serverUrl}/flatseekers/search`, filters, config()), //todo: change to get!
  allusers: () => axios.get(`${serverUrl}/users`),
  initChat: () => axios.post(serverUrl+'/initchat', {},config()),
  deleteChatList: () => axios.delete(serverUrl+'/chat')
}

export default Api
