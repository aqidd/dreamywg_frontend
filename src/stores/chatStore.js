import { action, observable } from 'mobx'
import network from '../util/network'
import io from 'socket.io-client'
import React from 'react'


class ChatStore {
  @observable listOfChats = []
  @observable chatUnit = {
    messages: []
  }

  @observable clientId = null

  @action pushData = async (MessageUnit) => this.listOfChats.push(MessageUnit)

  constructor() {
    this.initChatStore()
  }

  @action initChatStore = async () => {
    await this.assignUserId()
    this.socket = io('localhost:8080');
    this.socket.on('reply', this.addMessage.bind(this))
    this.socket.on('connect', this.connect.bind(this))
    this.socket.on('disconnect', () => console.log('disconnected ;('))
  }

  @action connect() {
    console.log('connected')
    this.socket.emit('storeClientInfo', { userId: this.clientId })
  }


  @action addMessage = (data) => {
    this.chatUnit.messages = [...this.chatUnit.messages, data]
  }

  @action sendMessage = (content) => {
    const message = {
      user1: this.chatUnit.user1,
      user2: this.chatUnit.user2,
      content: content,
      timestamp: Date.now(),
      senderId: this.clientId
    }
    this.addMessage(message)
    this.socket.emit('sendMessage', message)
  }

  @action retrieveChatList = () => {
    network.chatList()
      .then((response) => {
        console.log('chat data size', response.data.length)
        if (response.data.length == 0) {
          network.initChat().then((response) => {
            console.log('success create new chat')
          }).catch((err) => {
            console.log('fail create new chat')
          })
          retrieveChatList()
        } else {
          console.log('storing data to chat list', response.data)
          this.listOfChats = response.data
        }

      })
      .catch((err) => {
        console.log('fail retrieve chat list')
      })
  }

  @action retrieveChatUnit = (id) => {
    console.log('retrieve chat unit')
    network.chatUnit(id)
      .then((response) => {
        console.log('chat data', response.data)
        this.chatUnit = response.data
      })
      .catch((err) => {
        console.log('fail retrieve chat unit')
      })
  }

  @action assignUserId = async () => {
    const response = await network.getUserId()
    if (!response) {
      return null
    } else this.clientId = response.data
  }

  @action getTime = (timestamp) => {
    let date = new Date(timestamp)
    let hours = date.getHours()
// Minutes part from the timestamp
    let minutes = '0' + date.getMinutes()
    return hours + ':' + minutes.substr(-2)
  }

  @action updateClientSocketInfo = (data) => {
    this.clientSocketInfo = data
    console.log('current client info', this.clientSocketInfo)
  }


}

const Store = () => new ChatStore()

export default Store
