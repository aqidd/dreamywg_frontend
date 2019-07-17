import axios from 'axios'

export const serverUrl = 'http://localhost:4005'
export const socketUrl = 'localhost:8080'

let config = () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem('token')}`
    }
  }
}

const Api = {
  login: credentials => axios.post(`${serverUrl}/users/login`, credentials, config()),
  register: userData => axios.post(`${serverUrl}/users`, userData, config()),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  chatList: () => axios.get(serverUrl + '/chat/', config()), //retrieve chat list
  chatUnit: (id) => axios.get(serverUrl + '/chatunit', {
    params: {
      _id: id
    }
  }), //retrieve chat unit
  profileOffer: data => axios.post(`${serverUrl}/flatofferer/`, data, config),
  profileSeeker: data => axios.post(`${serverUrl}/flatseeker/`, data, config),
  schedules: () => axios.get(`${serverUrl}/schedules`),
  timeslots: (scheduleId) => axios.get(`${serverUrl}/schedules/${scheduleId}/timeslots`),
  pastTimeslots: () => axios.get(`${serverUrl}/schedules/timeslots/past`),
  createSchedules: (data) => axios.post(`${serverUrl}/schedules`, data, config),
  createTimeslots: (scheduleId, data) => axios.post(`${serverUrl}/schedules/${scheduleId}/timeslots`, data, config),
  updatePastTimeslotStatus: (id, data) => axios.put(`${serverUrl}/timeslots/${id}`, data, config),
  createFlatofferer: data => axios.post(`${serverUrl}/flatofferers`, data, config),
  createFlatseeker: data => axios.post(`${serverUrl}/flatseekers`, data, config),
  getFlat: id => axios.get(`${serverUrl}/flats/${id}`),
  loadSearchProperties: () => axios.get(`${serverUrl}/flatseekers/loadSearchProperties`, config()),
  flatseekerSearch: filters => axios.post(`${serverUrl}/flatseekers/search`, filters, config()), //todo: change to get!
  allusers: () => axios.get(`${serverUrl}/users`),
  initChat: () => axios.post(serverUrl + '/initchat', {}, config()),
  getUserId: () => axios.get(`${serverUrl}/userid`, config()),
  deleteChatList: () => axios.delete(serverUrl + '/chat'),
  getSocketUrl: () => socketUrl
}

export default Api
