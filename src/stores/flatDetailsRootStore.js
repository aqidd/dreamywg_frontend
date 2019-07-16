import FlatStore from './flatStore'
import FlatPresentationStore from './flatPresentationStore'

class FlatDetailsRootStore {
    constructor(id) {
        this.flatStore = new FlatStore(this);
        this.flatStore.setId(id)

        this.flatPresentationStore = new FlatPresentationStore(this);
    }
}

export default FlatDetailsRootStore
