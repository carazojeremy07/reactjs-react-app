import React from "react";
import Book from "./Book";
import "../style/book.css";
import SearchFilter from "./SearchFilter";
import { useState } from "react";

export default function Books() {
  const books = [
    { title: "Science 1", author: "John", dueDate: "15", status: "Available" },
    { title: "Math 1", author: "Jane", dueDate: "17", status: "Available" },
    { title: "PE 1", author: "Mike", dueDate: "20", status: "Available" },
    { title: "PE 2", author: "Lisa", dueDate: "26", status: "Available" },
    { title: "Math 2", author: "Lisa", dueDate: "10", status: "Checked Out" },
    {
      title: "Science 2",
      author: "Mike",
      dueDate: "6",
      status: "Checked Out",
    },
    {
      title: "Geometry 1",
      author: "Jane",
      dueDate: "2",
      status: "Checked Out",
    },
    {
      title: "Geometry 2",
      author: "John",
      dueDate: "18",
      status: "Checked Out",
    },
    {
      title: "Biology 1",
      author: "John",
      dueDate: "27",
      status: "Checked Out",
    },
    {
      title: "Biology 2",
      author: "Jane",
      dueDate: "29",
      status: "Checked Out",
    },
  ];

  const [filteredTasks, setFilteredTasks] = useState(books);

  function handleFilter(filteredTasks) {
    setFilteredTasks(filteredTasks);
  }

  return (
    <>
      <div className="main">
        <h1>BOOK LIST</h1>
        <SearchFilter book={filteredTasks} bookFilter={handleFilter} />
        <div className="bookDiv">
          {filteredTasks.map((book, index) => (
            <Book key={index} index={index} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
