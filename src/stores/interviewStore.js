import { observable, action, runInAction } from 'mobx'
import network from '../util/network'

class InterviewStore {
  // TODO should be moved to scheduleStore
  @observable schedules = []

  @observable currentTimeslots = []
  @observable pastTimeslots = []

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
}

const interviewStore = () => new InterviewStore()

export default interviewStore
