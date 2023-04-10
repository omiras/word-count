import React, { useState } from "react";

export default function WordCount() {
  // el estado es solo una variable que es el valor del input
  const [currentWord, setCurrentWord] = useState("");

  // el estado de las plabaras que he añadido hasta el momento
  const [words, setWords] = useState([]); // ['perro', 'gato']

  // vamos a crear una función para gestionar el click. Lo que va a hacer, es recorrer todo el array de tareas, y filtrar aquella cuyo índice es el mismo sobre el que hemos click
  const removeItem = (taskId) => { // handleClick
    // filter
    const newWords = words.filter( (w, index) => index !== taskId );

    // Actualizo la variable de estado que contiene todas las palabras
    setWords(newWords);

  };

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

          // borra el contenido del input
          setCurrentWord('');
        }}
        className={`btn btn-success ${currentWord.length == 0 && "d-none"}`}
      >
        Add word to the list
      </button>
      <ul className="list-group">
        {words.map((w, index) => (
          <li onClick={(event)=> {
            console.log(event.target);
            // debemos eliminar el elemento identificado por el valor de 'index'
            console.log('index elemento:' , index);

            // invocamos a la función para eliminar la tarea
            removeItem(index);

          }} key={index} className="list-group-item">{w} - {w.length}</li>
        ))}
      </ul>
    </div>
  );
}
