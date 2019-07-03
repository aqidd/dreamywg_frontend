import {action, observable} from "mobx"
import network from '../util/network'

class Store {
  @observable listofMessage = []
  @action pushData = (MessageUnit) => this.listofMessage.push(MessageUnit);
  constructor() {

  }
  @action retrieveChat = () => {
    network.chat(userId)
      .then((response) => {
        console.log('chat data', response.data)
      })
      .catch((err) => {
        console.log('fail retrieve message data')
      })
  }
}

class MessageUnit {
  @observable messageUnitVars = {senderId:'', receiverId:'', content:'', timestamp:time, senderName: '', receiverName:''}
  constructor(senderId, receiverId, content, timestamp, senderName, receiverName){
      this.senderId = senderId;
      this.receiverId = receiverId;
      this.content = content;
      this.timestamp = timestamp;
      this.senderName = senderName;
      this.receiverName = receiverName;
  }


}
const initStore = () => new Store();

export default initStore
