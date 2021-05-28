import React from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/use-store";
import {isEmpty as _isEmpty} from "lodash-es";
import {useHistory} from "react-router-dom";
import {SummarizeMethod} from "../summarize-form/summarize-form";
import MarkerIcon from "../../icons/marker-icon";
import BrainIcon from "../../icons/brain-icon";
import {calculateReadingTimeEstimation} from "../../utils/utils";

const HistoryList: React.FC = () => {
    const {summarizationStore} = useStore();
    const history = useHistory();

    if (_isEmpty(summarizationStore.history)) {
        return null;
    }

    return (
        <div className="absolute right-0 mt-20 border-l border-gray-300 p-10 w-80 text-right">
            <span className="font-bold tracking-wide text-gray-700 text-sm">
                היסטורית כתבות
            </span>
            <div className="flex flex-col mt-4">
                {summarizationStore.history.map(result => (
                    <div key={result.uuid} onClick={() => history.push(`/result/${result.uuid}`)} className="mb-4 cursor-pointer">
                        <span className="block font-semibold text-lg">{result.title}</span>
                        <span className="block text-gray-500">{new Date(result.date).toLocaleDateString("he-IL", { weekday: "long", year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <div className="flex">
                            {Number(result.method) === SummarizeMethod.Extractive && <MarkerIcon />}
                            {Number(result.method) === SummarizeMethod.Abstractive && <BrainIcon />}
                            <span className="mx-2">&bull;</span>
                            <span>{calculateReadingTimeEstimation(result.word_count)} דק׳ </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(HistoryList);