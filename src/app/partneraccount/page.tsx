"use client";
import { useRouter } from "next/navigation";

const SideBySideForms = () => {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto items-center justify-center mt-2 flex flex-col md:flex-row md:space-x-4">
      <div className="bg-white rounded-lg  p-4 flex-2 md:w-1/2">
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Create your partner account
          </h2>
          <form>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Create an account to list and manage property.
              </label>
            </div>

            <div className="mb-4 mt-10">
              <label className="block text-sm font-medium text-gray-700">
                Email Address<b className="text-red-500">*</b>
              </label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              Continue
            </button>

            <div className="border-t border-gray-300 my-4 mt-8 mb-8"></div>

            <div className="mb-2">
              <label className="block text-xs font-medium text-gray-700 mb-8">
                Do you have questions about your property or the extranet? Visit
                Partner Help or ask another question on Partner Community.
              </label>
            </div>

            <button
              type="button"
              className="w-full bg-white-500 text-blue border border-blue-500 font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideBySideForms;
