import SummarizationStore from "./summarization-store";

class RootStore {
    summarizationStore: SummarizationStore;

    constructor() {
        this.summarizationStore = new SummarizationStore();
    }
}

export default RootStore;