import React, { useState } from "react";

function MagicButton() {
  const [magic, setMagic] = useState("This is Some magic");

  const magicDisappear = () => {
    magic ? setMagic("") : setMagic("This is Some magic");
  };

  return (
    <div>
      <button onClick={magicDisappear}>Magic Time</button>
      {magic}
    </div>
  );
}

export default MagicButton;
