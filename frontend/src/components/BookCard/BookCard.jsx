import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data }) => {
  return (
    <>
      <Link to={`/view-book-details/${data._id}`}>
        <div className="bg-white rounded p-4 flex flex-col transform transition-transform duration-300 ease-out hover:scale-105 shadow-md border border-green-300">
          <div
            className="bg-green-50 rounded flex items-center justify-center p-2"
            style={{
              backgroundImage: `url('/bg4.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img src={data.url} alt="/" className="h-[25vh] rounded" />
          </div>
          <h2 className="mt-4 text-xl font-thin text-green-900">{data.title}</h2>
          <p className="mt-4 text-green-800 font-thin text-sm">by {data.author}</p>
          <p className="mt-4 text-green-900 font-thin text-xl"> ₹ {data.price} </p>
        </div>
      </Link>
    </>
  );
};

export default BookCard;
