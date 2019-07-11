import { observable, action, runInAction } from 'mobx'
import network from '../util/network'

class InterviewStore {
  // TODO should be moved to scheduleStore
  @observable schedules = []

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
}

const interviewStore = () => new InterviewStore()

export default interviewStore
