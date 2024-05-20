import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are you sure you want to delete this book?
          </h3>
          <button
            className="p-4 bg-rose-600 text-white w-full m-8"
            onClick={handleDeleteBook}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
