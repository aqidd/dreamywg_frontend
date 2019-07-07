import FlatStore from './flatStore'
import FlatPresentationStore from './flatPresentationStore'

class FlatDetailsRootStore {
    constructor() {
        this.flatStore = new FlatStore(this)
        this.flatPresentationStore = new FlatPresentationStore(this)
    }
}

const flatDetailsRootStore = () => new FlatDetailsRootStore();

export default flatDetailsRootStore
