import React from "react";
import {SummarizeMethod} from "../../features/summarize-form/summarize-form";
import Radio from "../radio/Radio";
import RadioGroup from "../radio-group/RadioGroup";
import useIsDesktopMediaQuery from "../../hooks/useIsDesktopMediaQuery";

interface Props {
    value: SummarizeMethod;
    onChange: (method: SummarizeMethod) => void;
}

const SummarizeMethods: React.FC<Props> = ({value, onChange}) => {
    const isDesktop = useIsDesktopMediaQuery();

    const handleSummarizeMethodChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(Number((e.target as HTMLInputElement).value as unknown) as SummarizeMethod);
    };

    return (
        <div className="flex">
            <RadioGroup
                selectedValue={Number(value)}
                onChange={handleSummarizeMethodChange}
                name="group1"
                brand
                inline={isDesktop}
                className="sm:-mr-4"
            >
                <Radio
                    large
                    className="mt-6"
                    value={SummarizeMethod.Extractive}
                >
                    <span className="inline-block mr-10">אקסרקטיב</span>
                </Radio>

                <Radio
                    large
                    className="mt-6"
                    value={SummarizeMethod.Abstractive}
                >
                    <span className="inline-block mr-10">אבסטרקטיב</span>
                </Radio>
            </RadioGroup>
        </div>
    )

};

export default SummarizeMethods