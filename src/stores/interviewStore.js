import { observable, action } from 'mobx'
import network from '../util/network'

const msg = ['nice to have you here', 'i love you', 'hehe', 'haha']

class Store {
  @observable helloMsg = 'test'
  // TODO should be moved to scheduleStore
  @observable schedules = []

  @action async fetchSchedules() {
    let response = ''
        try {
            const data = await network.schedules();
            this.schedules = data.data;
            response = '{status: success}'
        } catch (e) {
            response = '{status: error}'
        }
        return response;
  }
}

const interviewStore = () => new Store()

export default interviewStore
