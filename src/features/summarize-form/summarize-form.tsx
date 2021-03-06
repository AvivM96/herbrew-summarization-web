import React, {useEffect, useState} from "react";
import {Controller, RegisterOptions, useForm} from "react-hook-form";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import TextArea from "../../components/textarea/text-area";
import SummarizeMethods from "../../components/summarize-methods/summarize-methods";
import {Spinner} from "@blueprintjs/core";
import "@blueprintjs/core/src/components/spinner/_spinner.scss";
import {useStore} from "../../hooks/use-store";
import {useHistory} from "react-router-dom";

export enum FormField {
    Title = "title",
    Text = "text",
    Method = "method",
    MaxSentences = "maxSentences"
}

export enum SummarizeMethod {
    Extractive,
    Abstractive
}

export type FormFields = {
    [FormField.Title]: string;
    [FormField.Text]: string;
    [FormField.Method]: SummarizeMethod;
    [FormField.MaxSentences]: number;
}

const FORM_DATA_KEY = "formData";

const formRules: Map<FormField, RegisterOptions> = new Map<FormField, RegisterOptions>([
    [FormField.Title, {
        required: "חובה להזין טקסט.",
        maxLength: {value: 100, message: "אורך הטקסט שהוכנס חורג מהמקסימום - 100"}
    }],
    [FormField.Text, {
        required: "חובה להזין טקסט.",
        minLength: {value: 100, message: "טקסט לא מספיק ארוך מינימום 255 תווים."}
    }],
]);

const SummarizeForm: React.FC = () => {
    const {
        handleSubmit, register, control, formState: {errors, isDirty}, watch, setValue, reset,
    } = useForm<FormFields>({
        defaultValues: {
            [FormField.Method]: SummarizeMethod.Extractive
        }
    });

    const {summarizationStore} = useStore();
    const [summarizing, setSummarizing] = useState<boolean>(false);
    const history = useHistory();
    const formData = watch();

    useEffect(() => {
        if (isDirty) {
            localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData.text, formData.method, formData.title, isDirty]);


    useEffect(() => {
        const formData = JSON.parse(localStorage.getItem(FORM_DATA_KEY) || "{}");
        reset(formData);
    }, [setValue, reset]);

    const onSubmit = async (values: FormFields) => {
        try {
            setSummarizing(true);
            const summarization = await summarizationStore.summarize(values);
            history.push(`/result/${summarization.uuid}`);
        } catch (e) {
            console.error("failed to summarize", e);
        } finally {
            setSummarizing(false);
        }
    };

    return (
        <form className="flex flex-col mt-8 sm:bg-white sm:rounded-lg sm:p-4 sm:shadow-lg"
              onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
                <Controller
                    name={FormField.Method}
                    control={control}
                    rules={{required: true}}
                    render={(data: any) => <SummarizeMethods onChange={data.field.onChange} value={data.field.value}/>}
                />
            </div>

            <Input
                className="mt-4"
                text="כותרת"
                placeholder="כותרת לסיכום"
                error={errors[FormField.Title]?.message}
                {...register(FormField.Title, formRules.get(FormField.Title))}
            />

            <TextArea
                text="טקסט"
                placeholder="הדבק כאן את הטקט אשר תרצה לסכם"
                className="h-40"
                error={errors[FormField.Text]?.message}
                {...register(FormField.Text, formRules.get(FormField.Text))}
            />

            <div className="px-3">
                <Button className="mt-16 self-center w-full h-10">
                    {!summarizing && <span>סכם !</span>}
                    {summarizing && <Spinner size={20}/>}
                </Button>
            </div>
        </form>
    );
};

export default SummarizeForm;