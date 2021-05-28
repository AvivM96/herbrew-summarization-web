import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {useStore} from "../../hooks/use-store";
import {observer} from "mobx-react-lite";

const Result: React.FC = () => {
    const history = useHistory();
    const {summarizationStore} = useStore();
    const { uuid } = useParams<{uuid: string}>();
    console.log(uuid)

    if (!summarizationStore.isReady) {
        history.push("/home");
        return null;
    }

    const summarization = summarizationStore.summarization;
    const paragraphs = summarization?.text?.split("\n");

    return (
        <div className="flex flex-col px-4 sm:w-1/3 mt-20">
            <span className="block text-3xl font-semibold">{summarization?.title}</span>
            <span className="block mt-6 text-gray-500">{summarization?.summary}</span>
            <div className="mt-6">
                {paragraphs?.map((paragraph) => (
                    <span className="block mb-4">
                        {paragraph}
                    </span>
                ))}
            </div>
        </div>
    )
};

export default observer(Result);