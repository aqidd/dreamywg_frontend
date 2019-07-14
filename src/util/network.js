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
}

export default Api
