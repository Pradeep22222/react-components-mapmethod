import React from "react";
let EmojiEntry = function (props) {
  return (
    <div>
      <p>{props.emoji}</p>
      <h3>{props.name}</h3>
      <p>{props.meaning}</p>
    </div>
  );
};
export default EmojiEntry;
