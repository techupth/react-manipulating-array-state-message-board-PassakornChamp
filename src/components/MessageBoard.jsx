import { useState } from "react";

function MessageBoard() {
  const [input, setInPut] = useState("");
  const [words, setWords] = useState([]);

  function handleInput(e) {
    setInPut(e.target.value);
  }
  function handleClick() {
    const newInputs = [...words];
    newInputs.push(input);
    setWords(newInputs);
  }
  function handleDelete(index) {
    const newWords = words.filter((_, i) => {
      i !== index;
    });
    setWords(newWords);
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleInput}
            value={input}
          />
        </label>
        <button className="submit-message-button" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div class="board">
        <div className="message">
          <ul>
            {words.map((words, index) => (
              <li key={index}>
                {words}
                <button onClick={() => handleDelete(index)}>x</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
