import React from "react";
import './logo.css';
import classNames from "classnames";

interface Props {
    className?: string;
}

const Logo: React.FC<Props> = ({className}) => {
    return (
        <div
            onClick={() => window.location.href = "#/home"}
            className={classNames(className, "logo cursor-pointer")} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/logo.png')`}}
        />
    )
};

export default Logo;
