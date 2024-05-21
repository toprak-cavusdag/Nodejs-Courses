import React from "react";
import BookSingleCard from "./BookSingleCard";

const BookCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
      {books?.map((item) => (
        <BookSingleCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default BookCard;
