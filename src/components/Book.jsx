import React, { useState } from "react";
import "../style/book.css";

export default function Book({ index, book }) {
  const [status, setStatus] = useState(book.status);

  return (
    <>
      <div className="bookDisplay">
        <ul className="booklist">
          <li>No: {index + 1}</li>
          <li>Title: {book.title}</li>
          <li>Author: {book.author}</li>
          <li>Due Date: {status === "Available" ? "" : book.dueDate}</li>
          <li>Status: {status}</li>
        </ul>
        <button
          className="togglestatus"
          onClick={() => setStatus("Checked Out")}
        >
          Toggle Status
        </button>
      </div>
    </>
  );
}
