import axios from 'axios'

export const serverUrl = 'http://localhost:4005';

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
  registerWithSocialMedia: userData => axios.patch(`${serverUrl}/users/${userData._id}`, userData, config),
  confirmation: token => axios.get(`${serverUrl}/confirmation/${token}`),
  profileOffer: data => axios.post(`${serverUrl}/flatofferer/`, data, config()),
  profileSeeker: data => axios.post(`${serverUrl}/flatseeker/`, data, config()),
  schedule: (scheduleId) => axios.get(`${serverUrl}/schedules/${scheduleId}`),
  schedules: (flatId) => axios.get(`${serverUrl}/schedules/flat/${flatId}`),
  timeslots: (scheduleId) => axios.get(`${serverUrl}/schedules/${scheduleId}/timeslots`),
  pastTimeslots: (flatId) => axios.get(`${serverUrl}/timeslots/${flatId}/past`),
  createSchedules: (data) => axios.post(`${serverUrl}/schedules`, data, config()),
  createTimeslots: (scheduleId, data) => axios.post(`${serverUrl}/schedules/${scheduleId}/timeslots`, data, config()),
  updatePastTimeslotStatus: (id, data) => axios.put(`${serverUrl}/timeslots/${id}`, data, config()),
  cancelTimeslot: (id) => axios.put(`${serverUrl}/timeslots/${id}/cancel`, {}, config()),
  getFlat: id => axios.get(`${serverUrl}/flats/${id}`),
  createFlatofferer: data => axios.post(`${serverUrl}/flatofferers`, data, config()),
  createFlatseeker: data => axios.post(`${serverUrl}/flatseekers`, data, config()),
  loadSearchProperties: () => axios.get(`${serverUrl}/flatseekers/loadSearchProperties`, config()),
  flatseekerSearch: filters => axios.post(`${serverUrl}/flatseekers/search`, filters, config()) //todo: change to get!
};

export default Api
