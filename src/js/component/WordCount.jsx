import React, { useState } from "react";

export default function WordCount() {
  // el estado es solo una variable que es el valor del input
  const [currentWord, setCurrentWord] = useState("");

  // el estado de las plabaras que he añadido hasta el momento
  const [words, setWords] = useState([]);

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
        onClick={()=> {
          // ...words va a hacer que usemos el operador de spread en el array actual. De manera, que vamos a recuperar todos los elementos del array y vamos a crear un array nuevo
          // como nuevo elmento, añadir el valor del input
          setWords([...words, currentWord]);
        }}
        className={`btn btn-success ${currentWord.length == 0 && "d-none"}`}
      >
        Add word to the list
      </button>
      <ul class="list-group">
        {words.map((w) => (
          <li class="list-group-item">{w} - {w.length}</li>
        ))}
      </ul>
    </div>
  );
}
