import { observable, action } from 'mobx'

const msg = ['nice to have you here', 'i love you', 'hehe', 'haha']

class Store {
  @observable helloMsg = 'test'
}

const interviewStore = () => new Store()

export default interviewStore
