
export default function WordCount() {
  const [inputValue, setInputValue] = useState("");
  const [words, setWords] = useState([]);
  return (
    <div className="container d-flex flex-column gap-4">
      <div className="form-group fs-4">
        <label htmlFor="word">Type a word in the box :</label>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={255}
          className="form-control fs-3 mt-2"
          id="word"
          value={inputValue}
        />
      </div>
      <div className="fw-bold container bg-info p-2">
        Word Count: {inputValue.length}
      </div>
      <button
        className={`btn btn-success ${inputValue.length == 0 && "d-none"}`}
      >
        Add word to the list
      </button>
      <ul className="list-group">{words.map(w => <li className="list-group-item">{w}</li>)}</ul>
    </div>
  );
}
