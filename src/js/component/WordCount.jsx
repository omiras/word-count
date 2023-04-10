import React, { useState } from "react";

export default function WordCount() {
  const [currentWord, setCurrentWord] = useState("");
  const [words, setWords] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  const handleClick = (index) => {
    const newWords = words.filter((w, i) => i !== index);
    setWords(newWords);
  };

  const filteredWords = words.filter((w) =>
    w.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <div className="container d-flex flex-column gap-4">
      <div className="form-group fs-4">
        <label htmlFor="word">Type a word in the box :</label>
        <input
          type="text"
          onChange={(e) => setCurrentWord(e.target.value)}
          value={currentWord}
          maxLength={255}
          className="form-control fs-3 mt-2"
          id="word"
        />
      </div>
      <div className="fw-bold container bg-info p-2">
        Word Count: {currentWord.length}
      </div>
      <button
        onClick={() => {
          setWords([...words, currentWord]);
        }}
        className={`btn btn-success ${currentWord.length == 0 && "d-none"}`}
      >
        Add word to the list
      </button>
      <div className="form-group fs-4">
        <label htmlFor="search">Search for a word:</label>
        <input
          type="text"
          onChange={(e) => setFilterWord(e.target.value)}
          value={filterWord}
          className="form-control fs-3 mt-2"
          id="search"
        />
      </div>
      <ul className="list-group">
        {filteredWords.map((w, index) => (
          <li
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(index)}
            className="list-group-item"
          >
            {w} - {w.length}
          </li>
        ))}
      </ul>
    </div>
  );
}
