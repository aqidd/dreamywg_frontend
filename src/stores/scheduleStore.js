import { action, observable, runInAction } from 'mobx'
import network from '../util/network'

class ScheduleStore {
  @observable scheduleId
  @observable schedule = {
    timeslots : []
  }

  constructor() {
      //this.scheduleId = id;
  }

  @action setScheduleId(id) {
    this.scheduleId = id;
  }

  @action async getTimeslots() {
    let response = ''
    try {
      const data = await network.schedule(this.scheduleId);
      this.schedule = data.data;
      response = '{status: success}'
    } catch (e) {
      console.log(e)
      response = '{status: error}'
    }
    return response
  }

  @action async bookSchedule(id){
    let response = ''
    try{
      const data = {
        status: "BOOKED"
      }
      const response = await network.updatePastTimeslotStatus(id, data);
      await this.getTimeslots();
      if(response) {
        console.log("response form update timeslot", response)
      }
    }catch (e){

    }
  }

  @action async cancelSchedule(id){
    let response = ''
    try{
      const response = await network.cancelTimeslot(id);
      await this.getTimeslots();
      if(response) {
        console.log("response form update timeslot", response)
      }
    }catch (e){

    }
  }

  @action isTimeslotOwner(timeslot) {
    return timeslot.userId === localStorage.getItem('userId')
  }

}

const scheduleStore = () => new ScheduleStore();

export default scheduleStore
