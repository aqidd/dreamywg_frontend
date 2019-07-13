import {action, observable} from "mobx"
import network from '../util/network'

class Store {
  @observable listofMessage = []
  @action pushData = (MessageUnit) => this.listofMessage.push(MessageUnit);
  constructor() {

  }
  @action retrieveChatList = () => {
    network.chatList()
      .then((response) => {
        console.log('chat data size', response.data.length);
        if(response.data.length == 0){
          network.initChat().then((response) =>{
              console.log("success create new chat")
          }).catch((err)=>{
              console.log("fail create new chat")
          })
          retrieveChatList();
        }else{
          console.log("storing data to chat list", response.data)
          this.listofMessage = response.data
        }
      })
      .catch((err) => {
        console.log('fail retrieve chat list')
      })
  }

  @action retrieveChatUnit = (id) => {
    network.chatUnit(id)
      .then((response) => {
        console.log('chat data', response.data)
      })
      .catch((err) => {
        console.log('fail retrieve chat unit')
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
