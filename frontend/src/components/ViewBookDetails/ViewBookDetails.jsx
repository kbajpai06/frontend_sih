import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";

const ViewDataDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:1000/api/v1/get-book-by-id/${id}`
      );
      setData(response.data.data);
    };
    fetch();
  }, [id]);

  return (
    <>
      {Data ? (
        <div className="px-4 md:px-12 py-8 bg-green-900 text-white flex gap-8 flex-col md:flex-row relative">
          <div className="bg-green-700 rounded p-4 h-[60vh] lg:h-[88vh] w-full lg:w-3/6 flex items-center justify-center relative">
            <div
              className="absolute inset-0 rounded-xl z-0"
              style={{
                backgroundImage: `url(${Data.url})`,
                filter: "blur(50px)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.7,
              }}
            ></div>
            <img
              src={Data.url}
              alt="/"
              className="h-[50vh] lg:h-[70vh] rounded-xl relative z-10"
            />
          </div>
          <div className="p-4 w-full lg:w-3/6">
            <h1 className="text-4xl text-green-200 font-semibold">
              {Data.title}
            </h1>
            <p className="text-green-300 mt-1">by {Data.author}</p>
            <p className="text-green-100 mt-4 text-xl font-thin">{Data.desc}</p>
            <p className="flex mt-4 items-center justify-start text-green-300">
              <GrLanguage className="me-3" /> {Data.language}
            </p>
            <p className="mt-4 text-green-400 text-3xl font-semibold">
              Price: ₹ {Data.price}
            </p>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-green-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewDataDetails;
