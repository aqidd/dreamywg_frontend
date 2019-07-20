import axios from 'axios'
import Swal from 'sweetalert2'

export const serverUrl = 'http://localhost:4005'
export const socketUrl = 'localhost:8080'

let config = () => {
  return {
    headers: {
      Authorization: `${localStorage.getItem('token')}`
    }
  }
}

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    let title = 'Sorry, something went wrong...'
    if (!error.response)
      title = 'Server unavailable'
    else if (error.response.data)
      title = error.response.data

    Swal.fire({
      title: title,
      type: 'error',
      position: 'center',
      showConfirmButton: false,
      toast: true
    })
    return Promise.reject(error)
  }
)

const Api = {
  // auth
  login: credentials => axios.post(`${serverUrl}/users/login`, credentials, config()),
  register: userData => axios.post(`${serverUrl}/users`, userData, config()),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  // user
  createFlatofferer: data => axios.post(`${serverUrl}/flatofferers`, data, config()),
  createFlatseeker: data => axios.post(`${serverUrl}/flatseekers`, data, config()),
  // search
  loadSearchProperties: () => axios.get(`${serverUrl}/flatseekers/loadSearchProperties`, config()),
  flatseekerSearch: filters => axios.post(`${serverUrl}/flatseekers/search`, filters, config()),
  // flat
  getFlat: id => axios.get(`${serverUrl}/flats/${id}`, config()),
  getMyFlat: () => axios.get(`${serverUrl}/flats/my-flat`, config()),
  // schedule
  schedule: (scheduleId) => axios.get(`${serverUrl}/schedules/${scheduleId}`),
  schedules: (flatId) => axios.get(`${serverUrl}/schedules/flat/${flatId}`),
  timeslots: (scheduleId) => axios.get(`${serverUrl}/schedules/${scheduleId}/timeslots`),
  pastTimeslots: (flatId) => axios.get(`${serverUrl}/timeslots/${flatId}/past`),
  createSchedules: (data) => axios.post(`${serverUrl}/schedules`, data, config()),
  createTimeslots: (scheduleId, data) => axios.post(`${serverUrl}/schedules/${scheduleId}/timeslots`, data, config()),
  updatePastTimeslotStatus: (id, data) => axios.put(`${serverUrl}/timeslots/${id}`, data, config()),
  cancelTimeslot: (id) => axios.put(`${serverUrl}/timeslots/${id}/cancel`, {}, config()),
  // chat
  createChat: id => axios.post(`${serverUrl}/chat/flat/${id}`, {}, config()),
  chatList: () => axios.get(serverUrl + '/chat/', config()),
  getSocketUrl: () => socketUrl
}

export default Api
