import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
const Speech = () => {
  const [value, setValue] = React.useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div className="speech">
      <div className="group">
        <h2>Text-To-Speech</h2>
      </div>
      <div className="group">
        <textarea
          rows="10"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
      <div className="group">
        <button onClick={() => speak({ text: value })}>Speak</button>
      </div>
    </div>
  );
};
export default Speech;
