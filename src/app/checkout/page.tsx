'use client'
import { useRouter } from "next/navigation"
const SideBySideForms = () => {
  const router = useRouter();
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
            <label className="block text-sm font-medium text-gray-700">
              Sign in to book with your saved details or register to manage your
              bookings on the go!
            </label>
          </form>
        </div>
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Enter your details</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Are you travelling for work?
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-3 w-3 text-indigo-600"
                    name="workTravel"
                    value="yes"
                  />
                  <span className="ml-2 text-sm">Yes</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio h-3 w-3 text-indigo-600"
                    name="workTravel"
                    value="no"
                  />
                  <span className="ml-2 text-sm">No</span>
                </label>
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/2 mr-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name <b className="text-red-500">*</b>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <b className="text-red-500">*</b>
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address<b className="text-red-500">*</b>
              </label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Who are you booking for?
              </label>
              <div className="mt-1 flex">
                <div className="mr-6">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-3 w-3 text-indigo-600"
                      name="bookingFor"
                      value="self"
                    />
                    <span className="ml-2 text-sm">Self</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-3 w-3 text-indigo-600"
                      name="bookingFor"
                      value="others"
                    />
                    <span className="ml-2 text-sm">Others</span>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add to your stay</h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                I am interested in renting a car
              </label>
              <div className="mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 text-indigo-600"
                    name="rentCar"
                  />
                  <span className="ml-2 text-sm">Yes</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Special Requests</h2>
          <p className="text-sm text-gray-600 mb-4">
            Special requests cannot be guaranteed – but the property will do its
            best to meet your needs. You can always make a special request after
            your booking is complete!
          </p>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Please write your requests in English. (optional)
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </form>
        </div>

        <div className="mt-auto flex justify-end">
          <button
            className="bg-indigo-600 text-white px-14 py-3 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 mt-3 self-end"
            onClick={() => {
              router.push('/checkout/checkoutFinal')
            }}
          >
            Next:Final Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBySideForms;
