import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const EditBook = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/books/${id}`)
      .then((response) => {
        setData({
          title: response.data.books.title,
          author: response.data.books.author,
          publishYear: response.data.books.publishYear,
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened.");
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    if (data.title === "" || data.author === "" || data.publishYear === "") {
      return alert("Please Fill required inputs");
    }

    setLoading(true);
    axios
      .put(`http://localhost:8000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An Error happened.", err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="border-blue-400 text-gray-500 text-xl">
              Title - Book Name
            </label>
            <input
              type="text"
              value={data.title}
              required
              className="py-2 mt-2 px-4 border-2 border-gray-500 w-full rounded-lg"
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>

          <div className="my-4">
            <label className="border-blue-400 text-gray-500 text-xl">
              Author
            </label>
            <input
              type="text"
              value={data.author}
              required
              className="py-2 mt-2 px-4 border-2 border-gray-500 w-full rounded-lg"
              onChange={(e) => setData({ ...data, author: e.target.value })}
            />
          </div>

          <div className="my-4">
            <label className="border-blue-400 text-gray-500 text-xl">
              Publish time
            </label>
            <input
              type="number"
              value={data.publishYear}
              required
              className="py-2 mt-2 px-4 border-2 border-gray-500 w-full rounded-lg"
              onChange={(e) =>
                setData({ ...data, publishYear: e.target.value })
              }
            />
          </div>
          <button
            onClick={() => handleEditBook()}
            className="p-3 bg-blue-500 text-white m-8 hover:bg-blue-700 duration-200 ease-in"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
