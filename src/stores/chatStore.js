import { action, observable, toJS } from 'mobx'
import network from '../util/network'
import io from 'socket.io-client'

class Store {
  @observable chats = {}

  @observable clientId = null

  @observable activeChatId

  constructor(id) {
    this.initChatStore(id)
  }

  @action initChatStore = async id => {
    await this.assignUserId()

    if (id) {
      const data = (await network.createChat(id)).data
      this.assignChatList(data.chats)
      this.activeChatId = data.userId
    }
    this.socket = io(network.getSocketUrl())
    this.socket.on('reply', this.addMessage.bind(this))
    this.socket.on('connect', this.connect.bind(this))
    this.socket.on('disconnect', () => console.log('disconnected'))
  }

  @action connect() {
    this.socket.emit('storeClientInfo', { userId: this.clientId })
  }

  @action addMessage = data => {
    const senderId = data.senderId.toString()
    this.chats[senderId].messages = [...this.chats[senderId].messages, data]
  }

  get currentChat() {
    return this.chats[this.activeChatId]
  }

  @action sendMessage = content => {
    const activeChat = this.chats[this.activeChatId]
    const message = {
      user1: activeChat.user1,
      user2: activeChat.user2,
      content: content,
      timestamp: Date.now(),
      senderId: this.clientId
    }
    this.chats[this.activeChatId].messages = [
      ...this.chats[this.activeChatId].messages,
      message
    ]
    this.socket.emit('sendMessage', message)
  }

  @action assignChatList = chats => {
    this.activeChatId = Object.keys(chats)[0]
    this.chats = chats
  }

  @action retrieveChatList = async () => {
    try {
      this.assignChatList((await network.chatList()).data)
    } catch (err) {
      console.log(`Error in retrieving chatlist: ${err}`)
    }
  }
  @action assignUserId = async () => {
    try {
      this.clientId = localStorage.getItem('userId')
    } catch (err) {
      console.log(`Error in getting UserId: ${err}`)
    }
  }

  @action updateActiveChat = id => {
    this.activeChatId = id
  }
}

const ChatStore = id => new Store(id)

export default ChatStore
