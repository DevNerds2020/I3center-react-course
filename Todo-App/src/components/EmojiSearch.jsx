/* eslint-disable react/jsx-key */
import { emojis } from "../../../sample-data/emojis";
import { useState } from "react";
const EmojiSearch = () => {
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  const handleChange = (event) => {
    const newEmojis = emojis.filter((emoji) =>
      emoji.keywords.includes(event.target.value),
    );
    setFilteredEmojis(newEmojis);
  };
  return (
    <div>
      <input onChange={handleChange}></input>
      {filteredEmojis.map((emoji) => (
        <div>
          {emoji.symbol} {emoji.title}
        </div>
      ))}
    </div>
  );
};

export default EmojiSearch;
