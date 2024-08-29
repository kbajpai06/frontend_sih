import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from '../components/Loader/Loader'
import BookCard from '../components/BookCard/BookCard'

const AllBooks = () => {
  const [Data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-all-books"
      );
      setData(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div className='bg-white min-h-screen px-12 py-8'>
      <h4 className="font-thin text-2xl text-green-600">Entire Library</h4>
      {!Data && <div className="flex items-center justify-center min-h-screen"><Loader/></div>}
      <div className="my-8 text-gray-900 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  )
};

export default AllBooks
