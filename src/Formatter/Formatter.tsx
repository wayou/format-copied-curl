import React, { useState, useCallback } from "react";
import "./Formatter.scss";
import { TextBlock } from "../TextBlock/TextBlock";
import { format } from "../common/format";

export const Formatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = event.target.value;
      setInput(text);
      setOutput(format(text));
    },
    []
  );

  return (
    <div className="formatter">
      <TextBlock
        className="curl-input"
        value={input}
        placeholder={"paste curl here..."}
        onChange={handleInputChange}
      ></TextBlock>
      <TextBlock
        className="curl-output"
        placeholder={"nothing here..."}
        value={output}
        readOnly
      ></TextBlock>
    </div>
  );
};
