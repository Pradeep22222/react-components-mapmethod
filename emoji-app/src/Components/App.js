import React from "react";
import EmojiEntry from "./Entry";
import emojipedia from "../EmojiObject";

let emojiSection = function (indObject) {
  return (
    <EmojiEntry
      key={indObject.id}
      emoji={indObject.emoji}
      name={indObject.name}
      meaning={indObject.meaning}
    />
  );
};

let EmojiApp = function () {
  return <div>{emojipedia.map(emojiSection)}</div>;
};
export default EmojiApp;
