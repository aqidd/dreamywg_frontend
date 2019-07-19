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
    console.log(error.response)
    Swal.fire({
      title: 'Error occour during request, try again...',
      text: error.response.message,
      type: 'error',
      confirmButtonText: 'OK'
    })
    return Promise.reject(error)
  }
)

const Api = {
  login: credentials =>
    axios.post(`${serverUrl}/users/login`, credentials, config()),
  register: userData => axios.post(`${serverUrl}/users`, userData, config()),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  createChat: id => axios.post(`${serverUrl}/chat/flat/${id}`, {}, config()),
  chatList: () => axios.get(serverUrl + '/chat/', config()),
  schedules: () => axios.get(`${serverUrl}/schedules`),
  timeslots: scheduleId =>
    axios.get(`${serverUrl}/schedules/${scheduleId}/timeslots`),
  pastTimeslots: () => axios.get(`${serverUrl}/schedules/timeslots/past`),
  createSchedules: data => axios.post(`${serverUrl}/schedules`, data, config()),
  createTimeslots: (scheduleId, data) =>
    axios.post(
      `${serverUrl}/schedules/${scheduleId}/timeslots`,
      data,
      config()
    ),
  updatePastTimeslotStatus: (id, data) =>
    axios.put(`${serverUrl}/timeslots/${id}`, data, config()),
  createFlatofferer: data =>
    axios.post(`${serverUrl}/flatofferers`, data, config()),
  createFlatseeker: data =>
    axios.post(`${serverUrl}/flatseekers`, data, config()),
  getFlat: id => axios.get(`${serverUrl}/flats/${id}`),
  loadSearchProperties: () =>
    axios.get(`${serverUrl}/flatseekers/loadSearchProperties`, config()),
  flatseekerSearch: filters =>
    axios.post(`${serverUrl}/flatseekers/search`, filters, config()), //todo: change to get!
  getUserId: () => axios.get(`${serverUrl}/userid`, config()),
  getSocketUrl: () => socketUrl
}

export default Api
