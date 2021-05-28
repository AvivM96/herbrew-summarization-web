import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {useStore} from "../../hooks/use-store";
import {observer} from "mobx-react-lite";
import {SummarizeMethod} from "../../features/summarize-form/summarize-form";
import MarkerIcon from "../../icons/marker-icon";
import BrainIcon from "../../icons/brain-icon";
import {calculateReadingTimeEstimation} from "../../utils/utils";

const Result: React.FC = () => {
    const history = useHistory();
    const {summarizationStore} = useStore();
    const { uuid } = useParams<{uuid: string}>();
    const historyResult = summarizationStore.getHistory(uuid);

    const summarization = summarizationStore.summarization || historyResult;

    if (!summarization) {
        history.push("/home");
        return null;
    }

    const paragraphs = summarization?.text?.split("\n");

    return (
        <div className="flex flex-col px-4 sm:w-2/5 mt-20">
            <span className="block text-5xl font-semibold">{summarization?.title}</span>
            <div className="flex mt-4">
                {Number(summarization.method) === SummarizeMethod.Extractive && <MarkerIcon />}
                {Number(summarization.method) === SummarizeMethod.Abstractive && <BrainIcon />}
                <span className="mx-2">&bull;</span>
                <span>{calculateReadingTimeEstimation(summarization.word_count)} דק׳ </span>
            </div>
            <span className="block text-lg mt-6 text-gray-600">{summarization?.summary}</span>
            <div className="mt-6 border-t border-gray-400 pt-4">
                {paragraphs?.map((paragraph, index) => (
                    <span key={index} className="block text-lg mb-4">
                        {paragraph}
                    </span>
                ))}
            </div>
        </div>
    )
};

export default observer(Result);