import axios from 'axios'

const serverUrl = 'http://localhost:4005'

let config = {
  headers: {
    authentication: `${localStorage.getItem('token')}`
  }
}

const Api = {
  login: credentials => axios.post(serverUrl + '/users/login', credentials, config),
  register: userData => axios.post(`${serverUrl}/users`, userData, config),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  profileOffer: data => axios.post(`${serverUrl}/flatofferer/`, data, config),
  profileSeeker: data => axios.post(`${serverUrl}/flatseeker/`, data, config),
  schedules: () => axios.get(`${serverUrl}/schedules`),
  timeslots: (scheduleId) => axios.get(`${serverUrl}/schedules/${scheduleId}/timeslots`),
  pastTimeslots: () => axios.get(`${serverUrl}/schedules/timeslots/past`)
}

export default Api
