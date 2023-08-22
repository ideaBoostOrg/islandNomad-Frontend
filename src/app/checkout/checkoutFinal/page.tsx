"use client";
import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import countryData from "./countryCodes.json";

import { useRouter } from "next/navigation";

interface Country {
  name: string;
  dialCode: string;
}

const SideBySideForms = () => {

  const router = useRouter()

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountrySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
  };
  return (
    <div className="max-w-6xl mx-auto mt-2 flex flex-col md:flex-row md:space-x-4">
      {/* Left Form (1/3 screen size) */}
      <div className="bg-white rounded-lg p-4 flex-1 mb-4 md:mb-0 md:w-1/3">
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-4">Tea Mount Forest</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                No:33, Rose Garden, Katumana, Nuwara Eliya Nuwara Eliya, 22200
                Nuwara Eliya, Sri Lanka
              </label>
              {/* <div className="mt-1">
                <label className="inline-flex items-center">
                  
                </label>
              </div> */}
            </div>
          </form>
        </div>

        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-4">Your Booking Details</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Check-in : <b>Sun 20 Aug 2023</b>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Check-out : <b>Mon 21 Aug 2023</b>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                The length of stay : <b>1 night</b>
              </label>
              {/* <div className="mt-1">
                <label className="inline-flex items-center">
                  
                </label>
              </div> */}
            </div>
          </form>
        </div>

        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-md font-semibold mb-4">Your Price Summary</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Original Price: <b>LKR 19,025.10</b>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Limited-Time Deal : <b>- LKR 7,610.04</b>
              </label>
              <label className="block text-sm font-medium text-gray-700">
                The length of stay : <b>1 night</b>
              </label>
              <label className="block text-md mt-2 mb-0 font-md font-bold text-gray-700">
                Total Price : <b>LKR 11,415.06</b>
              </label>
            </div>
          </form>
        </div>
      </div>
      {/* Small Gap */}
      <div className="hidden md:block w-4"></div>{" "}
      {/* Small gap between forms on medium-sized screens and larger */}
      {/* Right Form (2/3 screen size) */}
      <div className="bg-white rounded-lg  p-4 flex-2 md:w-2/3">
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-4">
                Enter your Address
              </h2>
              <label className="block text-sm font-medium text-gray-700">
                Country/region<b className="text-red-500">*</b>
              </label>
              <select
                className="block w-full p-2 border rounded-md text-sm font-medium text-gray-700 mt-1"
                value={selectedCountry}
                onChange={handleCountrySelect}
              >
                <option
                  className="block text-sm font-medium text-gray-700"
                  value=""
                >
                  Select a country
                </option>
                {countryData.map((country: any, index: number) => (
                  <option key={index} value={country.dial_code}>
                    {country.name} ({country.dial_code})
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Telephone Number<b className="text-red-500">*</b>
              </label>

              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <label className="block text-xs font-xs text-gray-700">
              Needed by the property to validate your booking
            </label>
            <div className="mb-2">

              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                    name="rentCar"
                  />
                  <span className="ml-2 text-sm">Yes, I would like free paperless confirmation (recommended)</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg">

          <form>
            <div className="mb-2">

              <div className="mt-1">

                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  name="rentCar"
                />
                <span className="ml-2 text-sm">Yes, I consent to receiving marketing emails including deals, travel inspiration and updates on products and services from islandNomad.</span>

              </div>
            </div>


            <div className="mb-2">

              <div className="mt-1">

                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  name="rentCar"
                />
                <span className="ml-2 text-sm">Yes, I consent to receiving marketing emails from Booking.com about transport deals from Booking.com Transport Limited.</span>

              </div>
            </div>
          </form>
        </div>



        <div className="mt-auto flex justify-end">
          <button
            onClick={
              () => {
                router.push("/confirm")
              }
            }
            className="bg-indigo-600 text-white px-14 py-3 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 mt-3 self-end"
          >
            Complete Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBySideForms;
