import {action, computed, observable} from "mobx";
import SummarizationService, {SummarizationResponse} from "../services/summarization-service";
import {FormFields} from "../features/summarize-form/summarize-form";
import {isNil as _isNil} from "lodash-es";

class SummarizationStore {
    @observable.shallow summarization: SummarizationResponse | null = null;

    async summarize(data: FormFields): Promise<void> {
        const response = await SummarizationService.summarize(data);
        const cleanSummary = this.cleanData(response.summary)
        this.setSummarization({
            ...response,
            summary: cleanSummary
        });
    }

    cleanData(text: string): string {
        let cleanedText = text;

        cleanedText = cleanedText.replace("קראו עוד בכלכליסט", "");
        cleanedText = cleanedText.replace("תגיות האזקר", "");

        return cleanedText;
    }

    @action
    setSummarization = (summarization: SummarizationResponse): void => {
        this.summarization = summarization;
    }

    @computed
    get isReady(): boolean {
        return !_isNil(this.summarization);
    }
}

export default SummarizationStore;