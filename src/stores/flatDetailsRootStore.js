import FlatStore from './flatStore'
import FlatPresentationStore from './flatPresentationStore'
import InterviewStore from './interviewStore'

class FlatDetailsRootStore {
    constructor() {
        this.flatStore = new FlatStore(this)
        this.flatPresentationStore = new FlatPresentationStore(this)
        this.interviewStore = InterviewStore(this)
    }
}

const flatDetailsRootStore = () => new FlatDetailsRootStore();

export default flatDetailsRootStore
