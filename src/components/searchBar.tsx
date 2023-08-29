'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BiBed } from 'react-icons/bi';

const SearchBar = () => {

    const [searchInput1, setSearchInput1] = useState('');
    const [searchInput2, setSearchInput2] = useState('');
    const [searchInput3, setSearchInput3] = useState('');

    const router = useRouter();

    const handleSearch = () => {
        console.log(searchInput1, searchInput2, searchInput3);
        router.push(`/searchresults?location=${searchInput1}&checkin=${searchInput2}&count=${searchInput3}`);
    };

    return (
        <div className="flex flex-wrap justify-center mt-8 bg-gray-900 p-0 rounded-lg">
            <div className="w-full md:w-2/6 p-2 relative">
                <label className="relative">
                    <BiBed className="absolute left-2 bottom-0 h-6 w-6 text-gray-500" />
                    <input
                        type="text"
                        className="w-full p-2 pl-8 border border-gold-500 rounded"
                        placeholder="Where are you going?"
                        value={searchInput1}
                        onChange={(e) => setSearchInput1(e.target.value)}
                    />
                </label>
            </div>
            <div className="w-full md:w-2/6 p-2">
                <input
                    type="date"
                    className="w-full p-2 border border-gold-500 rounded "
                    placeholder="Check-in Date"
                    value={searchInput2}
                    onChange={(e) => setSearchInput2(e.target.value)}
                />
            </div>
            <div className="w-full md:w-1/6 p-2">
                <input
                    type="number"
                    className="w-full p-2 border border-gold-500 rounded"
                    placeholder="Count"
                    value={searchInput3}
                    onChange={(e) => setSearchInput3(e.target.value)}
                    required
                    min="1" // Set the minimum value to 1
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
    );
};
export default SearchBar;