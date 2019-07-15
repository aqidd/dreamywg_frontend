import {action, observable} from "mobx"
import network from '../util/network'
import io from 'socket.io-client'
import React from 'react'


class Store {
  @observable listofMessage = []
  @observable chatUnit = [];
  @observable clientSocketInfo = [];
  @observable clientId = null;
  @observable content = null;
  @observable state = {
    user1: '',
    user2: '',
    content: '',
    timestamp: Date,
    messages: []
  };
  @observable socket = io('localhost:8080');
  @action pushData = async (MessageUnit) => this.listofMessage.push(MessageUnit);
  constructor() {
    //this.socket = io('localhost:8080');
    //setTimeout(getUserId,1000)
    await this.getUserId();

    this.socket.on('connect', function (socket) {
      console.log("on connect", this.clientId)
      if(this.clientId != null){
        this.socket.emit('storeClientInfo', { customId: this.clientId});
      }

    });

    this.socket.on('receive_message', function(data){
      console.log("receive data again back", data)
      //addMessage(data);
    });

    this.socket.on('selfBroadcastClientInfo', function(data){
      //this is self update
      console.log('update client info', data);
      this.updateClientSocketInfo(data);
    });

    this.socket.on('broadcastClientInfo', function(data){
      //this is broadcast update
      console.log('update client info', data);
      this.updateClientSocketInfo(data);
    });

    this.socket.on('testmessage', function(data){
      console.log(data);
    });

  }
  @action addMessage = (data) => {
    console.log(data);
    this.setState({messages: [...this.state.messages, data]});
    console.log(this.state.messages);
  }

  @action sendMessage = (content) => {
    //looping through array for the socketid of the receiver
    let socketreceiverId;
    let receiverId;
    let temp = this.chatUnit.map((element) => {
      receiverId = element.user1;
      console.log("receiver id", receiverId);
      if(receiverId === this.clientId){
        //if the assigned receiverid is the current user then change to other user in current chat channel
        console.log("it is the samee change the receiver id")
        receiverId  = element.user2;
        console.log("current receiver id", receiverId)
      }

      console.log("user1", element.user1);
      console.log("user2", element.user2);
      console.log("socketid", socketreceiverId);
      console.log("content", content);
      this.socket.emit('message', {
        user1: this.chatUnit.user1,
        user2: this.chatUnit.user2,
        content: content,
        timestamp: Date.now(),
        receiver : receiverId
      });
  });


    //this.setState({message: ''});
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
    console.log("retrieve chat unit")
    network.chatUnit(id)
      .then((response) => {
        console.log('chat data', response.data)
        this.chatUnit = response.data
      })
      .catch((err) => {
        console.log('fail retrieve chat unit')
      })
  }

  @action getUserId = () => {
    network.getUserId()
      .then((response) => {
        console.log('current user id', response.data)
        this.clientId = response.data
      })
      .catch((err) => {
        console.log('fail retrieve chat unit')
      })
  }

  @action getTime= (timestamp) => {
    let date = new Date(timestamp);
    let hours = date.getHours();
// Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    return hours + ':' + minutes.substr(-2) ;
  }

  @action updateClientSocketInfo = (data) => {
    this.clientSocketInfo = data;
    console.log("current client info", this.clientSocketInfo)
  }
}

class MessageUnit {
  @observable messageUnitVars = {user1:'', user2:'', messages:[]}
  constructor(user1, user2, messages){
      this.user1 = user1;
      this.user2 = user2;
      this.messages = messages;
  }
}

const initStore = () => new Store();

export default initStore
