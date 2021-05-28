import {action, computed, observable} from "mobx";
import SummarizationService, {SummarizationResponse} from "../services/summarization-service";
import {FormFields} from "../features/summarize-form/summarize-form";
import {isNil as _isNil} from "lodash-es";

const HISTORY_KEY = "history"

class SummarizationStore {
    @observable.shallow summarization: SummarizationResponse | null = null;
    @observable summarizationHistory: Map<string, SummarizationResponse> = new Map<string, SummarizationResponse>();

    async summarize(data: FormFields): Promise<SummarizationResponse> {
        const response = await SummarizationService.summarize(data);
        const cleanSummary = this.cleanData(response.summary)
        const updatedData = {
            ...response,
            summary: cleanSummary
        };

        this.setSummarization(updatedData);
        this.storeResultInLocalStorage(updatedData);

        return this.summarization as SummarizationResponse;
    }

    cleanData(text: string): string {
        let cleanedText = text;

        cleanedText = cleanedText.replace("קראו עוד בכלכליסט", "");
        cleanedText = cleanedText.replace("תגיות האזקר", "");

        return cleanedText;
    }

    storeResultInLocalStorage(result: SummarizationResponse): void {
        const history = this.getResultHistory();
        localStorage.setItem(HISTORY_KEY, JSON.stringify([...history, result]));
    }

    getResultHistory(): SummarizationResponse[] {
        try {
            return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]") as SummarizationResponse[];
        } catch (e) {
            console.error(e)
            return [];
        }
    }

    getHistory(uuid: string): SummarizationResponse | undefined {
        return this.summarizationHistory.get(uuid);
    }

    @action
    loadHistory(): void {
       const history = this.getResultHistory();
       const historyMap = new Map<string, SummarizationResponse>();
       history.forEach(result => {
           historyMap.set(result.uuid, result);
       });

        this.summarizationHistory = historyMap;
    }

    @action
    setSummarization = (summarization: SummarizationResponse): void => {
        this.summarization = summarization;
        this.summarizationHistory = this.summarizationHistory.set(summarization.uuid, summarization);
    }

    @computed
    get isReady(): boolean {
        return !_isNil(this.summarization);
    }

    @computed
    get history(): SummarizationResponse[] {
        return Array.from(this.summarizationHistory.values());
    }
}

export default SummarizationStore;