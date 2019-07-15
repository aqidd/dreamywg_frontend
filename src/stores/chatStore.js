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

    this.socket = io('localhost:8080')
    this.socket.on('reply', this.addMessage.bind(this))
    this.socket.on('connect', this.connect.bind(this))
    this.socket.on('disconnect', () => console.log('disconnected'))
  }

  @action connect() {
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

  @action retrieveChatList = async () => {
    try {
      this.listOfChats = (await network.chatList()).data
      console.log(JSON.stringify(this.listOfChats))
      if (this.listOfChats.length !== 0) {
        await this.retrieveChatUnit(this.listOfChats[0]._id)
      }
    } catch (err) {
      console.log(`Error in retrieving chatlist: ${err}`)
    }
  }

  @action retrieveChatUnit = async (id) => {
    try {
      this.chatUnit = (await network.chatUnit(id)).data
    } catch (err) {
      console.log(`Error in retrieving chatlist with id ${id}: ${err}`)
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
