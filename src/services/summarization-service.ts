import {SummarizeMethod} from "../features/summarize-form/summarize-form";
import HttpService from "./http-service";

export type SummarizationRequest = {
    title: string;
    method: SummarizeMethod,
    text: string;
}

export type SummarizationResponse = {
    title: string;
    method: SummarizeMethod,
    summary: string;
    text: string;
    uuid: string;
    date: string;
    word_count: number;
}

class SummarizationService {
    public static summarize(request: SummarizationRequest): Promise<SummarizationResponse> {
        return HttpService.post("/summarize", request);
    }
}

export default SummarizationService;