import RoomStore from './roomStore'
import { observable } from 'mobx';

class RoomListPresentationStore {
    @observable showModal = false

    constructor() {
        this.roomStore = new RoomStore(this)
    }
}

const roomListPresentationStore = () => new RoomListPresentationStore();

export default roomListPresentationStore
