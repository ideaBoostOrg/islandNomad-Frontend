// pages/index.js
import React, { useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [searchInput1, setSearchInput1] = useState('');
  const [searchInput2, setSearchInput2] = useState('');
  const [searchInput3, setSearchInput3] = useState('');

  const handleSearch = () => {
    // Write your search logic here, using the searchInput1, searchInput2, and searchInput3 values.
    console.log('Search 1:', searchInput1);
    console.log('Search 2:', searchInput2);
    console.log('Search 3:', searchInput3);
  };

  return (
    <div>
      <Head>
        <title>Search Fields</title>
      </Head>
      
      <div className="flex flex-wrap justify-center mt-8 bg-gray-900 p-0 rounded-lg">
        <div className="w-full md:w-2/6 p-2">
          <input
            type="text"
            className="w-full p-2 border border-gold-500 rounded "
            placeholder="Location"
            value={searchInput1}
            onChange={(e) => setSearchInput1(e.target.value)}
          />
        </div>
        <div className="w-full md:w-2/6 p-2">
          <input
            type="text"
            className="w-full p-2 border border-gold-500 rounded "
            placeholder="Check-in Date"
            value={searchInput2}
            onChange={(e) => setSearchInput2(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/6 p-2">
          <input
            type="text"
            className="w-full p-2 border border-gold-500 rounded "
            placeholder="Count"
            value={searchInput3}
            onChange={(e) => setSearchInput3(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/6 p-2">
          <button
            className="w-full p-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
