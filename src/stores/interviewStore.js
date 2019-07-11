import { observable, action } from 'mobx'
import network from '../util/network'

const msg = ['nice to have you here', 'i love you', 'hehe', 'haha']

class Store {
  @observable helloMsg = 'test'
  // TODO should be moved to scheduleStore
  @observable schedules = [
    {_id: "5d26578f4daa6a7dccbc9c29", date: "2019-08-08T00:00:00.000Z", timeslots: []}
  ]

  @action async fetchSchedules() {
    this.schedules = []
    let response = ''
        try {
            const data = await network.schedules();
            console.log(data.data)
            runInAction(() => {
              this.schedules = data.data;
            })
            response = '{status: success}'
        } catch (e) {
            response = '{status: error}'
        }
        return response;
  }
}

const interviewStore = () => new Store()

export default interviewStore
