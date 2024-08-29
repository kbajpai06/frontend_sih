import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import BookCard from "../BookCard/BookCard";

const RecentlyAdded = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-recent-books"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div className="text-green-100 mt-8 px-4 bg-green-100">
      <h4 className="font-thin text-2xl text-green-900">New Featured Herbs</h4>
      {!Data && <div className="flex items-center justify-center my-8"><Loader/></div>}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
