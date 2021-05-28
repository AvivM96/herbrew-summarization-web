import React from "react";
import classNames from "classnames";
import {
  IRadioGroupProps,
  RadioGroup as BlueprintRadioGroup,
} from "@blueprintjs/core";

export interface RadioGProps extends IRadioGroupProps {
  brand?: boolean;
}

const RadioGroup: React.FunctionComponent<RadioGProps> = ({
  children,
  className,
  brand,
  ...rest
}) => {
  return (
    <BlueprintRadioGroup
      className={classNames({ "radio-group-brand": brand }, className)}
      {...rest}
    >
      {children}
    </BlueprintRadioGroup>
  );
};

export default RadioGroup;
