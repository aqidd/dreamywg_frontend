import { observable, action } from "mobx"
import { messaging } from "firebase"

const msg = ["nice to have you here", "i love you", "hehe", "haha"]

class Store {
     @observable helloMsg = ""

     constructor() {
          this.helloMsg = msg[0]
     }

     @action start = () => {
          this.timer = setInterval(
               () =>
                    (this.helloMsg = msg[Math.floor(Math.random() * (msg.length - 1))]),
               500
          )
     }

     stop = () => clearInterval(this.timer)
}

const initStore = () => new Store()

export default initStore
