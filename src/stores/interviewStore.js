import { observable, action, runInAction } from 'mobx'
import network from '../util/network'

class InterviewStore {
  // TODO should be moved to scheduleStore
  @observable schedules = []

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

  @action setCurrentTimeslots(data) {
    this.currentTimeslots = data;
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
    return response;
  }
}

const interviewStore = (rootStore) => new InterviewStore(rootStore)

export default interviewStore
