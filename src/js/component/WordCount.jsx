import React, { useState } from "react";

export default function WordCount() {
  // el estado es solo una variable que es el valor del input
  const [currentWord, setCurrentWord] = useState("");

  // el estado de las plabaras que he añadido hasta el momento
  const [words, setWords] = useState([]);

  const handleClick = (index) => {
    // Creamos un nuevo array con todos los elementos excepto el que se quiere borrar
    const newWords = words.filter((w, i) => i !== index);
    // Actualizamos el estado del array de palabras con el nuevo array sin el elemento borrado
    setWords(newWords);
  }

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
      <ul className="list-group">
        {words.map((w, index) => (
          <li key={index}  style={{cursor: 'pointer'}} onClick={(event)=> {
            handleClick(index);
          }} className="list-group-item">{w} - {w.length}</li>
        ))}
      </ul>
    </div>
  );
}
