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
      const data = await network.timeslots(this.scheduleId);
      this.schedule = data.data;
      response = '{status: success}'
    } catch (e) {
      console.log(e)
      response = '{status: error}'
    }
    return response
  }

  @action async update(id){
    let response = ''
    try{
      const data = {
        status: "BOOKED"
      }
      const response = await network.updatePastTimeslotStatus(id, data);
      this.getTimeslots();
      if(response) {
        console.log("response form update timeslot", response)
      }
    }catch (e){

    }
  }

}

const scheduleStore = () => new ScheduleStore();

export default scheduleStore
