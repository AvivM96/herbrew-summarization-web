import React from "react";
import './logo.css';
import classNames from "classnames";

interface Props {
    className?: string;
}

const Logo: React.FC<Props> = ({className}) => {
    return (
        <div className={classNames(className, "logo")} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/logo.png')`}}/>
    )
};

export default Logo;
