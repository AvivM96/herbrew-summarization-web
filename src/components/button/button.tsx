import React from "react";
import classNames from "classnames";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<Props> = ({children, className, ...props}) => {
    return (
        <button type="submit" className={classNames(className, "ring-2 rounded-xl ring-yellow-400 py-2 text-yellow-500")}>
            {children}
        </button>
    );
};

export default Button;