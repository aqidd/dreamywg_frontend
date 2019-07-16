import { action, observable } from 'mobx'
import network from '../util/network'
import io from 'socket.io-client'
import React from 'react'


class ChatStore {

  @observable chats = {}

  @observable clientId = null

  @observable activeChatId = 0

  @action pushData = async (MessageUnit) => this.listOfChats.push(MessageUnit) //todo!

  constructor() {
    this.initChatStore()
  }

  @action initChatStore = async () => {
    await this.assignUserId()

    this.socket = io('localhost:8080')
    this.socket.on('reply', this.addMessage.bind(this))
    this.socket.on('connect', this.connect.bind(this))
    this.socket.on('disconnect', () => console.log('disconnected'))
  }

  @action connect() {
    this.socket.emit('storeClientInfo', { userId: this.clientId })
  }


  @action addMessage = (data) => {
    console.log(JSON.stringify(data))
    const senderId = data.senderId.toString()
    this.chats[senderId].messages = [...this.chats[senderId].messages, data]
  }

  @action sendMessage = (content) => {
    const activeChat = this.chats[this.activeChatId]
    const message = {
      user1: activeChat.user1,
      user2: activeChat.user2,
      content: content,
      timestamp: Date.now(),
      senderId: this.clientId
    }
    this.chats[this.activeChatId].messages = [...this.chats[this.activeChatId].messages, message]
    this.socket.emit('sendMessage', message)
  }

  @action retrieveChatList = async () => {
    try {
      const chats = (await network.chatList()).data
      this.activeChatId = Object.keys(chats)[0] //todo check if error here if chats is empty
      this.chats = chats
    } catch (err) {
      console.log(`Error in retrieving chatlist: ${err}`)
    }
  }
  @action assignUserId = async () => {
    try {
      this.clientId = (await network.getUserId()).data
    } catch (err) {
      console.log(`Error in getting UserId: ${err}`)
    }
  }
}

const Store = () => new ChatStore()

export default Store
