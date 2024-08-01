import React from "react";
import "../style/book.css";
import { useState } from "react";

export default function SearchFilter({ book, bookFilter }) {
  const [searchQuery, setSearchQuery] = useState("");

  function searchInput(e) {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "") {
      bookFilter(Array.isArray(book) ? book : []);
    } else {
      if (Array.isArray(book)) {
        const filtered = book.filter((item) =>
          (item.title || "").toLowerCase().includes(query.toLowerCase())
        );
        bookFilter(filtered);
      } else {
        console.error("Expected allTask to be an array.");
      }
    }
  }

  return (
    <>
      <input
        className="searchbooks"
        type="text"
        value={searchQuery}
        onChange={searchInput}
        placeholder="Search by Description"
      />
    </>
  );
}
