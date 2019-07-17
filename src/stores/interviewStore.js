import { observable, action, runInAction, toJS } from 'mobx'
import network from '../util/network'

class InterviewStore {
  // TODO should be moved to scheduleStore
  @observable schedules = []

  @observable currentSchedule = {}
  @observable currentTimeslots = []
  @observable pastTimeslots = []

  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @action async fetchSchedules() {
    this.schedules = []
    let response = ''
    try {
        const data = await network.schedules();
        runInAction(() => {
          this.schedules = data.data;
        })
        response = '{status: success}'
    } catch (e) {
      console.log(e)
      response = '{status: error}'
    }
    return response;
  }

  @action async fetchPastTimeslots() {
    this.pastTimeslots = []
    let response = ''
    try {
        const data = await network.pastTimeslots();
        runInAction(() => {
          this.pastTimeslots = data.data;
        })
        response = '{status: success}'
    } catch (e) {
      console.log(e)
      response = '{status: error}'
    }
    return response;
  }

  @action setCurrentTimeslots(schedule, timeslots) {
    this.currentSchedule = schedule
    this.currentTimeslots = timeslots;
  }

  @action async submitSchedules(evt) {
    evt.preventDefault()
    const param = {
      startDate: evt.target.startDate.value,
      endDate: evt.target.endDate.value
    }

    let response = ''
    try {
        await network.createSchedules(param);
        response = '{status: success}'
    } catch (e) {
      console.log(e)
      response = '{status: error}'
    }
    window.location.reload(); 
    return response;
  }

  @action async submitTimeslots(evt) {
    evt.preventDefault()
    const scheduleId = evt.target.scheduleId.value
    console.log(scheduleId)
    const param = {
      startTime: evt.target.startTime.value,
      endTime: evt.target.endTime.value,
      sessionTime: evt.target.sessionTime.value
    }

    let response = ''
    try {
        await network.createTimeslots(scheduleId, param);
        response = '{status: success}'
    } catch (e) {
      console.log(e)
      response = '{status: error}'
    }
    window.location.reload(); 
    return response;
  }

  @action async updateTimeslotStatus(id, status) {
    let response = ''
    try {
        await network.updatePastTimeslotStatus(id, {status: status});
        response = '{status: success}'
    } catch (e) {
      console.log(e)
      response = '{status: error}'
    }
    window.location.reload(); 
    return response;
  }
}

const interviewStore = (rootStore) => new InterviewStore(rootStore)

export default interviewStore
