import React from "react";

export default function WordCount() {
  return (
    <div className="container d-flex flex-column gap-4">
      <div className="form-group fs-4">
        <label htmlFor="word">Type a word in the box
:</label>
        <input type="text" maxLength={255} className="form-control fs-3 mt-2" id="word" />
      </div>
      <div className="fw-bold container bg-info p-2">Word Count: 0</div>
      <button className="btn btn-success">Add word to the list</button>
    </div>
  );
}
