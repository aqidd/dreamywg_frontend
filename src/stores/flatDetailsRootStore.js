import FlatStore from './flatStore'
import FlatPresentationStore from './flatPresentationStore'
import InterviewStore from './interviewStore'

class FlatDetailsRootStore {
    constructor(id) {
        this.flatStore = new FlatStore(this);
        this.flatStore.setId(id)

        this.flatPresentationStore = new FlatPresentationStore(this);
        this.interviewStore = InterviewStore(this)
    }
}

export default FlatDetailsRootStore
