import React from "react";
import { ExtendedHTMLAttributes } from "../common/types";
import "./TextBlock.scss";

export type IProps = ExtendedHTMLAttributes<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  {
    //
  }
>;

export const TextBlock = ({ children, className, ...props }: IProps) => {
  const classNames = ["text-block", className].join(" ");
  return (
    <textarea className={classNames} {...props}>
      {children}
    </textarea>
  );
};
