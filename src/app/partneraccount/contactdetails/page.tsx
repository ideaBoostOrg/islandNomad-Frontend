"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import countryData from "../../checkout/checkoutFinal/countryCodes.json";

const SideBySideForms = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountrySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
  };
  return (
    <div className="max-w-6xl mx-auto items-center justify-center mt-2 flex flex-col md:flex-row md:space-x-4">
      <div className="bg-white rounded-lg  p-4 flex-2 md:w-1/2">
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Your full name and phone number are needed to ensure the
                security of your islandNomad account
              </label>
            </div>

            <div className="mb-4 mt-10">
              <label className="block text-sm font-medium text-gray-700">
                First Name<b className="text-red-500">*</b>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4 mt-10">
              <label className="block text-sm font-medium text-gray-700">
                Last Name<b className="text-red-500">*</b>
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4 mt-10">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number<b className="text-red-500">*</b>
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
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                We wll text a two factor authentication code to this number when
                you sign in.
              </label>
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideBySideForms;
