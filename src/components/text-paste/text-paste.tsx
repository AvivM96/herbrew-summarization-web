import React from "react";
import classNames from "classnames";

const TextPaste: React.FC = () => {
    return (
        <div className="mt-8">
            <textarea
                className={classNames(
                    'appearance-none block resize-none w-full h-40 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 sm:h-64',
                )}
                placeholder="Paste the text you would like to summarize here"
            />
        </div>
    )
}

export default TextPaste;