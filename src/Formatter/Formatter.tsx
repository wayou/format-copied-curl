import React, { useState, useCallback, useEffect } from "react";
import "./Formatter.scss";
import { TextBlock } from "../TextBlock/TextBlock";
import { format } from "../common/format";
import { SAMPLE_INPUT } from "../common/util";

export const Formatter = () => {
  const [input, setInput] = useState(SAMPLE_INPUT);
  const [output, setOutput] = useState("");
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = event.target.value;
      setInput(text);
      setOutput(format(text));
    },
    []
  );

  useEffect(() => {
    setOutput(format(input));
  }, []);

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
