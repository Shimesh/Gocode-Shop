import React, { useState } from "react";

function MagicButton() {
  const [text, setText] = useState("This is Some Text");
  const [hidden, setHidden] = useState(false);

  const textDisappear = () => {
    setHidden(() => true);
    if (hidden) {
      setText(() => "   ");
      setHidden(() => false);
    } else {
      setText(() => "This is Some Text");
    }
  };

  return (
    <div>
      <button onClick={textDisappear}>Magic Time</button>
      {text}
    </div>
  );
}

export default MagicButton;
