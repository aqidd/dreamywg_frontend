import { action, observable } from 'mobx'
import network from '../util/network'
import io from 'socket.io-client'


class ChatStore {

  @observable chats = {}

  @observable clientId = null

  @observable activeChatId

  constructor() {
    this.initChatStore()
  }

  @action initChatStore = async () => {
    await this.assignUserId()
    this.socket = io(network.getSocketUrl())
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

  get currentChat(){
    return this.chats[this.activeChatId]
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
      this.activeChatId = Object.keys(chats)[0]
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

  @action updateActiveChat = (id) => {
    this.activeChatId = id
  }
}

const Store = () => new ChatStore()

export default Store
